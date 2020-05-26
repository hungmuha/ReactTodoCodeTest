import React from 'react';
import Item from './Item';

const TodoList = ({list, removeTask}) => {
    let displaylist = list.map((item) => {
        return (
            <Item 
                key = {item.taskID} 
                item = {item} 
                removeTask = {removeTask}
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