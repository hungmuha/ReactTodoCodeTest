import React from 'react';

const Item = ({item, removeTask, changeStatus}) => {
    return (
        <div>
            <input type="checkbox" onChange={()=> changeStatus(item)} checked={item.complete}/>
            <span>{item.title}</span>
            <button onClick={()=> removeTask(item)}>Remove</button>
        </div>
    )
}

export default Item;