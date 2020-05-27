import React from 'react';

const Item = ({item, removeTask, changeStatus, moveUp, moveDown,moveTop,moveBottom}) => {
    return (
        <div className="list-group-item d-flex flex-row align-items-center">
            <div className="flex-grow-1 form-check">
                <input className="form-check-input" type="checkbox" id={item.taskID} onChange={()=> changeStatus(item)} checked={item.complete}/>
                <label className="form-check-label text-capitalize todo-task" htmlFor={item.taskID}>{item.title}</label>
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