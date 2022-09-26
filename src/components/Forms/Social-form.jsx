import React, { Component } from 'react';

class SocialForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isFriend: false, 
            about: '',
            gender: '',
            favColor: 'blue'
        }
        this.handleNameOnChange = this.handleNameOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }
    handleNameOnChange(e) {
        const { name, value, checked, type } = e.target;
        type === 'checkbox' 
        ?
             this.setState({
            [name]: checked
        })   
        :
        this.setState({
            [name]: value
        })
    }   
    handleOnSubmit(e) {
        e.preventDefault()
        Object.values(e.target).map((value) => console.log(typeof value))        
        // console.log(typeof (e.target))     
    } 
    render() {
        return (
            <div>
                <h2>Social</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name='firstName' placeholder='First Name'
                        onChange={this.handleNameOnChange} value={this.state.firstName} />
                    <br />
                    <input type="text" name='lastName' placeholder='Last Name'
                        onChange={this.handleNameOnChange} value={this.state.lastName} />
                    <br />
                    <textarea name="about" cols="30" rows="10" placeholder='Same textarea' value={this.state.about} onChange={this.handleNameOnChange}/>
                    <br />
                    <input type="checkbox" name='isFriend' checked={this.state.isFriend} onChange={this.handleNameOnChange} />                        
                    <label htmlFor="isFriend">Is a friend</label>
                    <br />
                    <label>
                        <input type="radio" name='gender' value='male' onChange={this.handleNameOnChange} checked={this.state.gender === 'male'}/> male
                    </label>
                    <label>
                        <input type="radio" name='gender' value='female' onChange={this.handleNameOnChange} checked={this.state.gender === 'female'}/> female
                    </label>
                    <br />
                    <label>
                        <select type="select" name='favColor' select={this.state.favColor} onChange={this.handleNameOnChange}>
                            <option value="blue">blue</option>
                            <option value="red">red</option>
                            <option value="green">green</option>
                            <option value="yellow">yellow</option>
                            <option value="purple">purple</option>
                        </select> Chose your favorite color
                    </label>
                    <br />
                    <br />
                    <button>OK</button>
                </form>
                <h3>First Name: {this.state.firstName}</h3>
                <h3>Last Name: {this.state.lastName}</h3>
                <h3>Is a friend: {this.state.isFriend ? 'Yes' : "No"}</h3>
                <h3>About: {this.state.about}</h3>
                <h3>You gender is: {this.state.gender}</h3>
                <h3>Your favorite color is: <span style={{color: this.state.favColor}}>
                    {this.state.favColor}</span></h3>
            </div>
        )
    }
}

export default SocialForm;