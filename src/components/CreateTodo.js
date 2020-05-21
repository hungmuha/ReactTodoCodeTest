import React from 'react';

const CreateTodo = ({inputChange,inputValue,submitNewTask}) => {
    return(
        <div className="row justify-content-center">
            <div className="col-sm-6 ">
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
        </div>
    )
}

export default CreateTodo;