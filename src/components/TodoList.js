import React from 'react';
import Item from './Item';

const TodoList = ({list, removeTask, changeStatus, moveUp}) => {
    let displaylist = list.map((item) => {
        return (
            <Item 
                key = {item.taskID} 
                item = {item} 
                removeTask = {removeTask}
                changeStatus = {changeStatus}
                moveUp = {moveUp}
            />
        )
    });

    return(
        <div className="row justify-content-center">
            <div className="col-sm-4">
                {displaylist}
            </div>
        </div>
    );
};

export default TodoList;