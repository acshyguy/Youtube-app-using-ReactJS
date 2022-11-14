import React, { useState } from 'react'
import "./Search.css";

const Search = ({setSearchTerm}) => {
  
  const [input, setInput] = useState("")
  const  searchSubmitHandler = (event) => {
    event.preventDefault();
    setSearchTerm(input);
  } 
  return (
    <form onSubmit={searchSubmitHandler} className="search-bar">
        <input type="search" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button>Search</button>
    </form>
  )
}

export default Search