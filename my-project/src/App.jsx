import Card from "./Components/Card"
import Calculator from "./Components/Calculator";
import Speacial from "./Components/Speacial";
import CurrencyConverter from "./Components/CurrencyConverter";
export default function App() {
  return (
    <>
<CurrencyConverter/>
    <Speacial></Speacial>
     <Calculator/>
    <div className=" grid grid-cols-4">
  
    <Card username="niket"/>
    <Card/>
    <Card username="Gupta" post="testing enginear"/>
    <Card post={[1,3,4,5,5].join("⭐♥️")}/>
    <Card/>
    <Card/>
    <Card/>
    <h1 className=" text-center items-center text-3xl font-bold underline translate-x-3 hover:bg-red-900 rounded-3xl">
Niket Chutiya
    </h1>
    </div>
    </>
  )
}