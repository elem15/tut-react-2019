import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './Main.css';

const Main = () => {
    const name = 'Mikhail';
    const hours = (new Date()).getHours();
    const timeOfDay = 
        hours < 12 
        ? 'morning' 
        : hours < 19
        ? 'afternoon'
        : 'night';
    const color = 
        timeOfDay === 'morning'
        ? 'purple'
        : 'darkblue'
    const style = {
        textAlign: 'center',
        color,
        backgroundColor: 'lightgrey',
        fontSize: '30px'
    };
    return (
        <main>
            <aside style={style}>
                <div>Good {timeOfDay}</div>
                <div>{name}</div>
            </aside>
            <section>
                <h1>Main header</h1>
                <div className='todo-list'>
                    {
                        [1, 2, 3].map(item => <TodoItem item={item} key={item}/>)
                    }             
                </div>
            </section>
        </main>
    )
}

export default Main;