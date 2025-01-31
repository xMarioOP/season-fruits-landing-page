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
    family: "",
    order: "asc",
    genus: "",
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


  // Calcular los frutos filtrados cada vez que cambian 'fruits' o 'filters'
  const filteredFruits = useMemo(() => {
    let filtered = [...fruits]

    if (filters.search) {
      filtered = filtered.filter(fruit =>
        fruit.name.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    if (filters.family) {
      filtered = filtered.filter(fruit => fruit.family === filters.family)
    }

    if (filters.genus) {
      filtered = filtered.filter(fruit => fruit.genus === filters.genus)
    }

    if (filters.order) {
      filtered = filtered.sort((a, b) =>
        filters.order === 'asc'
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

  // Función para manejar cambios de filtro (family, genus, order)
  const handleCategoryChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <>
      <Header />
      <ProductFilters
        filters={filters}
        handleSearch={handleSearch}
        handleCategoryChange={handleCategoryChange}
        familyValues={uniqueFamilies}
        genusValues={uniqueGenus}
        orderValues={uniqueOrders}
      />

      <GeneralInformation
        currentCardsFruits={filteredFruits.length > 0 ? filteredFruits.slice(0, currentCards) : []}
      />
      <ProductList
        currentCards={currentCards}
        filteredFruits={filteredFruits}
        onSeeMore={handleSeeMore}
        isLoading={isLoading}
      />
    </>
  )
}

export default App





















// < Header />
// <div className='aa'>
//   <div>
//     <ProductFilters
//       filterProducts={filterProducts}
//       handleSearch={handleSearch}
//       handleSort={handleSort}
//     />
//     <ProductList
//       currentCards={currentCards}
//       fruits={filteredFruits}
//       onSeeMore={handleSeeMore}
//     />
//   </div>

//   <div>
//     <GeneralInformation
//       currentCardsFruits={filteredFruits.slice(0, currentCards)}
//     />
//   </div>
// </div>