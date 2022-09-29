import React, { Component } from 'react';
import SocialFormComponent from './SocialFormComponent';

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
            <SocialFormComponent 
                handleOnSubmit={this.handleOnSubmit}
                handleNameOnChange={this.handleNameOnChange}
                { ...this.state }
            />
        )
    }
}

export default SocialForm;