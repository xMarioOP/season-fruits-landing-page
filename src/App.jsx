import { useState, useEffect, useMemo } from 'react'
import './App.scss'
import { GeneralInformation } from './components/GeneralInformation/GeneralInformation'
import { Header } from './components/Header/Header'
import { ProductFilters } from './components/ProductFilters/ProductFilters'
import { ProductList } from './components/ProductList/ProductList'

function App() {
  const [fruits, setFruits] = useState([])
  const [currentCards, setCurrentCards] = useState(8)
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState({
    search: "",
    filterBy: "",
    family: "",
    genus: "",
    order: "",
    orderAZ: "asc",
  })

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await fetch("/api/fruit/all")
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setFruits(data)
      } catch (error) {
        console.error("Error:", error)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const getUniqueValues = (data, key) => {
    return [...new Set(data.map(item => item[key]))]
  };
  const uniqueFamilies = useMemo(() => getUniqueValues(fruits, "family"), [fruits])
  const uniqueGenus = useMemo(() => getUniqueValues(fruits, "genus"), [fruits])
  const uniqueOrders = useMemo(() => getUniqueValues(fruits, "order"), [fruits])

  const filteredFruits = useMemo(() => {
    let filtered = [...fruits]

    if (filters.search) {
      filtered = filtered.filter(fruit => 
        fruit.name.toLowerCase().includes(filters.search.toLowerCase())
      )
    } else if (filters.family && filters.filterBy === "family") {
      filtered = filtered.filter(fruit => fruit.family === filters.family)
    } else if (filters.genus && filters.filterBy === "genus") {
      filtered = filtered.filter(fruit => fruit.genus === filters.genus)
    } else if (filters.order && filters.filterBy === "order") {
      filtered = filtered.filter(fruit => fruit.order === filters.order)
    } else if (filters.orderAZ) {
      filtered = filtered.sort((a, b) =>
        filters.orderAZ === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      )
    }

    return filtered
  }, [filters, fruits])



  const handleSeeMore = () => {
    setCurrentCards(prev => prev + 4)
  }

  const handleSearch = (item) => {
    setFilters(prev => ({ ...prev, search: item }))
  }

  const handleCategoryChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <>
      < Header />
      <div className="main-container">
        <div className='products-container'>
          <ProductFilters
            filters={filters}
            handleSearch={handleSearch}
            handleCategoryChange={handleCategoryChange}
            familyValues={uniqueFamilies}
            genusValues={uniqueGenus}
            orderValues={uniqueOrders}
          />
          <ProductList
            currentCards={currentCards}
            filteredFruits={filteredFruits}
            onSeeMore={handleSeeMore}
            isLoading={isLoading}
          />
        </div>

        <div className='info-container'>
          <GeneralInformation
            currentCardsFruits={filteredFruits.length > 0 ? filteredFruits.slice(0, currentCards) : []}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  )
}

export default App


