import { useState, useEffect } from 'react'
import './App.scss'
import { GeneralInformation } from './components/GeneralInformation/GeneralInformation'
import { Header } from './components/Header/Header'
import { ProductFilters } from './components/ProductFilters/ProductFilters'
import { ProductList } from './components/ProductList/ProductList'

function App() {
  const [fruits, setFruits] = useState([])
  const [currentCards, setCurrentCards] = useState(8)
  const [filteredFruits, setFilteredFruits] = useState([])
  const [sortOrder, setSortOrder] = useState('asc')

  // console.log(fruits);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/fruit/all")
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setFruits(data)
        setFilteredFruits(data)
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchData()
  }, [])

  const handleSeeMore = () => {
    setCurrentCards(prev => prev + 4)
  }


  const filterProducts = (category) => {
    if (!category) {
      setFilteredFruits(fruits) // Mostrar todas las frutas si no se ha seleccionado ninguna categoría
      return
    }

    const filtered = fruits.filter((fruit) => {
      // Comprobamos si la propiedad seleccionada existe en el objeto fruta
      // y si tiene un valor asignado
      return fruit[category] && fruit[category].length > 0
    })

    // console.log("Filtered:", filtered) // Verifica el filtro
    setFilteredFruits(filtered) // Actualiza el estado con las frutas filtradas
  };






  const handleSearch = (item) => {
    const filtered = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(item.toLowerCase())
    )
    setFilteredFruits(filtered)
  }

  const handleSort = () => {
    const sorted = [...filteredFruits].sort((a, b) =>
      sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    setFilteredFruits(sorted)
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  return (
    <>
      <Header />
      <ProductFilters
        filterProducts={filterProducts}
        handleSearch={handleSearch}
        handleSort={handleSort}
      />
      <GeneralInformation
        currentCardsFruits={filteredFruits.length > 0 ? filteredFruits.slice(0, currentCards) : []}
      />
      <ProductList
        currentCards={currentCards}
        fruits={filteredFruits}
        onSeeMore={handleSeeMore}
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