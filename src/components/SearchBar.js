import React from 'react';

const SearchBar = ({searchValue, searchChange}) => {
    return (
        <div>
            <label htmlFor="search" >Search: </label>
            <input 
                type="text"
                id="search"
                onChange={searchChange}
                value={searchValue}
            />
        </div>
    )
}

export default SearchBar;