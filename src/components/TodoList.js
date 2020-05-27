import React from 'react';
import Item from './Item';

const TodoList = ({list, removeTask, changeStatus, moveUp, moveDown,moveTop,moveBottom}) => {
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
            />
        )
    });

    return(
        <div className="list-group">
            {displaylist}
        </div>
    );
};

export default TodoList;