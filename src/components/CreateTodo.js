import React from 'react';

const CreateTodo = ({inputChange,inputValue,submitNewTask}) => {
    return(
        <div className="p-1 mt-2">
            <form className="form-row d-flex flex-row align-items-center" onSubmit={submitNewTask}>
                <label className="m-1" htmlFor="title" >Add New Task </label>
                <input 
                    className="form-control flex-grow-1 m-1"
                    id="title" 
                    type="text" 
                    onChange={inputChange}
                    value={inputValue}
                />
                <button className="m-1 btn btn-primary" type="submit" disabled = {!inputValue}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateTodo;