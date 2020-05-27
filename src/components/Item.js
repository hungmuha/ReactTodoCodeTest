import React,{useState} from 'react';

const Item = ({item, removeTask, changeStatus, moveUp, moveDown,moveTop,moveBottom,changeTaskTitle}) => {
    const [showDropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {
        setDropdown(!showDropdown);
    }
    return (
        <div className="list-group-item d-flex flex-row align-items-center">
            <div className="flex-grow-1 input-group">
                <div className={"input-group-prepend " + (showDropdown? "show": "")}>
                    <div className="input-group-text">
                        <input className="" type="checkbox" aria-label="Checkbox for completed task" id={item.taskID} onChange={()=> changeStatus(item)} checked={item.complete}/> 
                    </div>
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" aria-haspopup="true" aria-expanded={showDropdown} onClick={()=> toggleDropdown()}>
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className={"dropdown-menu " + (showDropdown? "show": "")}>
                        <button type="button" className="dropdown-item btn btn-outline-success btn-sm" onClick={()=> toggleDropdown(moveUp(item))}>Up</button>
                        <button type="button" className="dropdown-item btn btn-outline-info btn-sm" onClick={()=> toggleDropdown(moveDown(item))}>Down</button>
                        <button type="button" className="dropdown-item btn btn-outline-primary btn-sm" onClick={()=> toggleDropdown(moveTop(item))}>Top</button>
                        <button type="button" className="dropdown-item btn btn-outline-secondary btn-sm" onClick={()=> toggleDropdown(moveBottom(item))}>Bottom</button>
                    </div>
                </div>
                <input 
                    className={"text-capitalize todo-task form-control border-0 " + (item.complete ? 'complete': '')}
                    htmlFor={item.taskID}
                    type="text"
                    onChange={(e)=> changeTaskTitle(e,item)}
                    value={item.title}
                />             
            </div>        
            <button type="button" className="btn btn-danger btn-sm" onClick={()=> removeTask(item)}>Remove</button>
        </div>
    )
}

export default Item;