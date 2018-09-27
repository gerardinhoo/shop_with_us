import React from 'react';


const SearchProduct = ({searchField, searchChange}) => {
    return (
        <div>
             <input 
              type="search" 
              placeholder="Search Products"
              onChange={searchChange} 
             />
        </div>
           
    );
}


export default SearchProduct;