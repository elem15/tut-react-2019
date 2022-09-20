import React from 'react';
import './Main.css';

const Main = () => {
    const name = 'Mikhail';
    const hours = (new Date(2022, 9, 20, 1)).getHours();
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
                <div>
                    <input type="checkbox" />
                    <p>checkbox placeholder</p>
                    <input type="checkbox" />
                    <p>checkbox placeholder</p>
                    <input type="checkbox" />
                    <p>checkbox placeholder</p>
                </div>
            </section>
        </main>
    )
}

export default Main;