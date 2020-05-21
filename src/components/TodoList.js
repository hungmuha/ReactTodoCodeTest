import React from 'react';
import Item from './Item';

const TodoList = ({list}) => {
    return list.map(item => {
        return(
            <Item 
                key = {item.taskID}
                item = {item}
            />
        )
    })
};

export default TodoList;