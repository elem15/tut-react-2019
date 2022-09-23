import React from 'react';

class TodoItemClass extends React.Component {      
    setCheckedHandler = () => {
        this.props.handleOnCheck(this.props.id);
    }
 
    render() {
        return (
            <div className='todo-item'>
                <input type="checkbox" checked={this.props.isActive} 
                onChange={this.setCheckedHandler}
                />
                <p>name: {this.props.name}</p>
            </div>
        )
    }
}

export default TodoItemClass;