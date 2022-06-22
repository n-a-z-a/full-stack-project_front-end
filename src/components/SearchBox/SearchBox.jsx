import React from 'react'
import './SearchBox.scss'

const SearchBox = ({searchTerm, handleInput, label, placeholder}) => {

  
  return (
    <form className='searchbox'>
      <label htmlFor="myLabel" className='searchbox__label'> {label}
        <input 
          type="text" 
          placeholder={placeholder} 
          value={searchTerm} 
          onInput={handleInput}
          className='searchbox__input'/>
      </label>
    </form>
  )
}

export default SearchBox