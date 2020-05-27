import React from 'react';

const Item = ({item, removeTask, changeStatus, moveUp, moveDown,moveTop,moveBottom,changeTaskTitle}) => {
    return (
        <div className="list-group-item d-flex flex-row align-items-center shadow-sm">
            <div className="flex-grow-1 form-check">
                <input className="form-check-input" type="checkbox" aria-label="Checkbox for completed task" id={item.taskID} onChange={()=> changeStatus(item)} checked={item.complete}/> 
                <input 
                    className="form-check-label text-capitalize todo-task" 
                    htmlFor={item.taskID}
                    type="text"
                    onChange={(e)=> changeTaskTitle(e,item)}
                    value={item.title}
                />             
            </div>
            <div className="">
                <button type="button" className="ml-1 btn btn-outline-success btn-sm" onClick={()=> moveUp(item)}>Up</button>
                <button type="button" className="ml-1 btn btn-outline-info btn-sm" onClick={()=> moveDown(item)}>Down</button>
                <button type="button" className="ml-1 btn btn-outline-primary btn-sm" onClick={()=> moveTop(item)}>Top</button>
                <button type="button" className="ml-1 btn btn-outline-secondary btn-sm" onClick={()=> moveBottom(item)}>Bottom</button>
                <button type="button" className="ml-1 btn btn-danger btn-sm" onClick={()=> removeTask(item)}>Remove</button>
            </div>
        </div>
    )
}

export default Item;