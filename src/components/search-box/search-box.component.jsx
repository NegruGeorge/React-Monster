import React from 'react';

import './search-box.styles.css';
export const SearchBox = ({placeholder,handleChange})=>(
    
    <input 
    className = 'search'    
     type='search' 
     placeholder={placeholder} 
    onChange={handleChange}
    
    />

)

// asta face

     {/* <input type='search' placeholder='search monsters' 
          onChange={e=> this.setState({searchField:e.target.value},()=>{
            // facem functie care asteapta pana se incaca setstate( care e async) si dupa face ce vrem
            // asa facem async in js
            console.log(this.state)
          })} /> */}