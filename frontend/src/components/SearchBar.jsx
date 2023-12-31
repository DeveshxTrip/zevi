import React from 'react'
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({setResults}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const FetchTerm = (value) =>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((json) => {
            console.log(json);
            const results = json.filter((user)=>{
                return value && user &&
                user.title && 
                user.title.toLowerCase().includes(value)
            })
            setResults(results)
        })
    };
    // hello devesh bhai
    

    const handleChange = (value) => {
      setSearchTerm(value);
      FetchTerm(value)
    };
   
  return (
    <div>
       <Container maxWidth="md" sx={{ mt: 15 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={(event) => handleChange(event.target.value)}
        sx={{ width: 825 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
    </div>
  )
}

export default SearchBar;
