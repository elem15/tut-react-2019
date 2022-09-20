import React from 'react';
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
    return (
        <main>
            <aside>
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