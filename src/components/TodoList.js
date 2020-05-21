import React from 'react';
import Item from './Item';

const TodoList = ({list, removeTask}) => {
    return list.map(item => {
        return(
            <Item 
                key = {item.taskID}
                item = {item}
                removeTask = {removeTask}
            />
        )
    })
};

export default TodoList;