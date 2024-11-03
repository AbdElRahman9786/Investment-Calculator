import { useState } from "react"
import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import { Table } from "./components/Table"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  })

  const check=userInput.duration>0;

  function handelChange(key,value){
    setUserInput((prev)=>{
      return{
        ...prev,
        [key]: +value,
      }
    })

  }
  
  return (
    <>
    <Header/>
    <UserInputs userInput={userInput} handelChange={handelChange}/>
    {!check&&<p className="center">please Enter Valide Values</p>}
    {check && <Table userInput={userInput}/>}
    
    </>
  )
}

export default App
