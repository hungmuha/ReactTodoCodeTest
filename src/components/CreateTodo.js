import React from 'react';

const CreateTodo = ({inputChange}) => {
    return(
        <div>
            <h1>here is the form</h1>
            <form onSubmit>
                <label htmlFor="title" >Title: </label>
                <input id="title" type="text" onChange={inputChange}></input>
            </form>
        </div>
    )
}

export default CreateTodo;