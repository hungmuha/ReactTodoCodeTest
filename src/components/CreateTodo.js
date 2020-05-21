import React from 'react';

const CreateTodo = ({inputChange,inputValue,submitNewTask}) => {
    return(
        <div>
            <h1>here is the form</h1>
            <form onSubmit={submitNewTask}>
                <label htmlFor="title" >Title: </label>
                <input 
                    id="title" 
                    type="text" 
                    onChange={inputChange}
                    value={inputValue}
                />
                <button type="submit" disabled = {!inputValue}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateTodo;