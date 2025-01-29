import './App.scss'
import { GeneralInformation } from './components/GeneralInformation/GeneralInformation'
import { ProductFilters } from './components/ProductFilters/ProductFilters'

function App() {

  return (
    <>
      <h1>Season fruits</h1>
      <p>THE MOST WONDERFUL FRUITS</p>
      <ProductFilters />
      <GeneralInformation />
    </>
  )
}

export default App
