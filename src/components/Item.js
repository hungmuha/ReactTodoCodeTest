import React from 'react';

const Item = ({item, removeTask}) => {
    return (
        <div>
            <span>{item.title}</span>
            <button onClick={()=> removeTask(item)}>Remove</button>
        </div>
    )
}

export default Item;