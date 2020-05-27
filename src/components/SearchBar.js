import React from 'react';

const SearchBar = ({searchValue, searchChange}) => {
    return (
        <div className="form-group row">
            <div className="col-sm-12">
                <label className="sr-only" htmlFor="search" >Search for tasks</label>
                <input 
                    className="form-control "
                    type="text"
                    id="search"
                    onChange={searchChange}
                    value={searchValue}
                    placeholder="Search for tasks"
                />
            </div>
        </div>
    )
}

export default SearchBar;