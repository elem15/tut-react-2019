import React, { Component } from 'react';
import HotelFormComponent from './HotelFormComponent';

class HotelForm extends Component {
    constructor() {
        super() 
        this.state = {
            firstName: '',
            lastName: '',
            age: '', 
            gender: '',
            destination: '',
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    
    handleOnChange(e) {
        const { name, value, type, checked } = e.target;
            this.setState((prevState) => {  
                const newValue = type === 'number' 
                    ? value.slice(0,2)
                    : value
                if (type === 'checkbox') {
                    const dietaryRestrictions = prevState.dietaryRestrictions;
                    dietaryRestrictions[value] = checked;
                    return {
                        dietaryRestrictions,
                    }
                }
                return {
                    [name]: newValue,
            }
        })
    }
    render() {
        return (
            <HotelFormComponent 
                handleOnChange={this.handleOnChange}
                { ...this.state }
            />
        )
    }
}

export default HotelForm;