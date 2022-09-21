import React from 'react';

const TodoItem = ({item}) => {
    return (
        <div className='todo-item'>
            <input type="checkbox" />
            <p>checkbox number: {item}</p>
        </div>
    )
}

export default TodoItem;