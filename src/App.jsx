import './App.css'
import Navbar from './Components/DaisyUi-Nav/Navbar'
import Nav from './Components/DaisyUi-Nav/Nav'
import PriceOptions from './Components/Price Options/PriceOptions'
import LineChartComponent from './Components/Line Charts/LineChart'
import Phones from './Components/Phones/Phones'


function App() {
  

  return (
    <>
     
     <Nav></Nav>
      {/* <Navbar></Navbar> */}
      <PriceOptions></PriceOptions>
      <LineChartComponent></LineChartComponent>
      <Phones></Phones>
    </>
  )
}

export default App
