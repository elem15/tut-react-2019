import React from 'react';

class TodoItemClass extends React.Component {      
    setCheckedHandler = () => {
        this.props.handleOnCheck(this.props.id);
    }
 
    render() {
        return (
            <div className={!this.props.isActive ? 'todo-item' : 'todo-item selected'}>
                <input type="checkbox" checked={this.props.isActive} 
                onChange={this.setCheckedHandler}
                />
                <p style={this.props.isActive ? {backgroundColor: 'lightblue'} : null}>name: {this.props.name}</p>
            </div>
        )
    }
}

export default TodoItemClass;