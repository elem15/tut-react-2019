import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleNameOnChange = this.handleNameOnChange.bind(this)
    }
    handleNameOnChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }    
    render() {
        return (
            <div>
                <form>
                    <input type="text" name='firstName' placeholder='First Name'
                        onChange={(e) => this.handleNameOnChange(e)} value={this.state.firstName} />
                    <br />
                    <input type="text" name='lastName' placeholder='Last Name'
                        onChange={(e) => this.handleNameOnChange(e)} value={this.state.lastName} />
                </form>
                <h1>First Name: {this.state.firstName}</h1>
                <h1>Last Name: {this.state.lastName}</h1>
            </div>
        )
    }
}

export default App;