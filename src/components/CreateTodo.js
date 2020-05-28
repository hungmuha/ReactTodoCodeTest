import React,{useState} from 'react';

const CreateTodo = ({submitNewTask}) => {
    const [input, setInput] = useState('');
    const [isError, setError] = useState(false);

    const submitTask = (e) => {
        e.preventDefault();
        if (!input.trim()) {
            return setError(true);
        }
        submitNewTask(input);
        setInput('');
        setError(false);
    }

    return(
        <div className="mt-3">
            <form className="form-group align-items-center" onSubmit={submitTask}>
                <label className="m-1" htmlFor="title" >Add New Task </label>
                <input 
                    className="form-control flex-grow-1"
                    id="title" 
                    type="text" 
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                {isError && (
                    <small className="form-text text-danger d-block">
                        Please make sure that your task content letters or/and numbers
                    </small>
                )}         
                <button className="mt-2 btn btn-primary" type="submit" disabled = {!input}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateTodo;