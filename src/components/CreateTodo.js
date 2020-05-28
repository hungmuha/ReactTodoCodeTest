import React from 'react';

const CreateTodo = ({inputChange,inputValue,submitNewTask,isError}) => {
    return(
        <div className="mt-3">
            <form className="form-group align-items-center" onSubmit={submitNewTask}>
                <label className="m-1" htmlFor="title" >Add New Task </label>
                <input 
                    className="form-control flex-grow-1"
                    id="title" 
                    type="text" 
                    onChange={inputChange}
                    value={inputValue}
                />
                <small className={"form-text text-danger " + (isError ? "d-block" : "d-none")}>Please make sure that your task content letters or/and numbers</small>
                <button className="mt-2 btn btn-primary" type="submit" disabled = {!inputValue}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateTodo;