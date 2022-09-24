import React, { Component } from 'react';
import { data } from '../../data/facer';
import TodoItem from '../TodoItem/TodoItem-class';
import './Main.css';
import logo from '../../logo.svg';


class Main extends Component {
    state = { 
        data,
        isLoaded: false,
    };
    handleOnCheck(id) {        
        this.setState((prevState) => ({
            data: prevState.data.map((item) => {
                if (item.id === id) item.isActive = !item.isActive;
                return item;
            })
        }))
        console.log(this.state)
    }
    render() {
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
        const todoItems = this.state.data.map(item => <TodoItem name={item.company} isActive={item.isActive} key={item.id} id={item.id} handleOnCheck={this.handleOnCheck.bind(this)}/>)

        return ( 
            <div>
                { 
                !this.props.isLoaded 
                ?
                <div>
                    <img src={logo} className="App-logo preloader" alt="logo" /> 
                </div>       
                :        
                <main>
                    <aside style={style}>
                        <div>Good {timeOfDay}</div>
                        <div>{name}</div>
                    </aside>
                    <section>
                        <h1>Main header</h1>
                        <div className='todo-list'>
                            {
                                todoItems
                            }
                        </div>
                    </section>
                </main>   
            }                  
            </div>
        )
    }
}

export default Main;