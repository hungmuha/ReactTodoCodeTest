import React from 'react';

const SearchBar = ({searchValue, searchChange}) => {
    return (
        <div className="form-group row">
            <div className="col-auto">
                <label className="sr-only" htmlFor="search" >Search </label>
                <input 
                    className="form-control"
                    type="text"
                    id="search"
                    onChange={searchChange}
                    value={searchValue}
                    placeholder="Search for task"
                />
            </div>
        </div>
    )
}

export default SearchBar;