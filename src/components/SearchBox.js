import React from 'react'
import { CiSearch } from "react-icons/ci";
const SearchBox = () => {
  return (
    <div className='search-box position-relative d-flex align-items-center'>
        <CiSearch className='mr-2' style={{background:'#f0f5ff'}}/>
        <input type='search' placeholder='Search'/>
    </div>
  )
}

export default SearchBox