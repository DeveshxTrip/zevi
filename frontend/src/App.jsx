import { useState } from "react"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Products from "./Products"


function App() {
  const[results,setResults]= useState([])

  return (
    <div>
    <SearchBar setResults={setResults}/> 
    <SearchResults results={results}/>
    <Products/>
    </div>
      )
      }


export default App
