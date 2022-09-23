import React, { useState } from 'react';

const TodoItem = ({name, isActive}) => {
    const [ checked, setChecked ] = useState(isActive);
    const setCheckedHandler = () => {
        setChecked(!checked)
    };
    return (
        <div className='todo-item'>
            <input type="checkbox" checked={checked} onChange={setCheckedHandler}/>
            <p>name: {name}</p>
        </div>
    )
}

export default TodoItem;