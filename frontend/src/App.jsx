import { useState } from "react"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Products from "./components/Products"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  const[results,setResults]= useState([])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/search" element={<SearchBar setResults={setResults}/> }/>
      <Route path="/results" element={<SearchResults results={results}/>}/>
      <Route path="/product" element={<Products/>}/>
    </Routes>
    </BrowserRouter>
      )
      }


export default App
