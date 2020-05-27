import React from 'react';
import Item from './Item';

const TodoList = ({list, removeTask, changeStatus, moveUp, moveDown,moveTop,moveBottom,changeTaskTitle}) => {
    let displaylist = list.map((item) => {
        return (
            <Item 
                key = {item.taskID} 
                item = {item} 
                removeTask = {removeTask}
                changeStatus = {changeStatus}
                moveUp = {moveUp}
                moveDown ={moveDown}
                moveTop = {moveTop}
                moveBottom = {moveBottom}
                changeTaskTitle = {changeTaskTitle}
            />
        )
    });

    return(
        <div className="list-group shadow-sm">
            {displaylist}
        </div>
    );
};

export default TodoList;