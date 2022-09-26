import React, { Component } from 'react';

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
            <div>
                <h2>Hotel</h2>
                <form action="">
                    <input 
                        type="text" 
                        name='firstName' 
                        placeholder='first name' 
                        value={this.state.firstName}
                        onChange={this.handleOnChange}
                    />
                    <br />
                    <input 
                        type="text" 
                        name='lastName' 
                        placeholder='last name' 
                        value={this.state.lastName}
                        onChange={this.handleOnChange}
                    />
                    <br />
                    <input 
                        type='number'
                        min='6'
                        max='91' 
                        name='age' 
                        placeholder='enter your age' 
                        value={this.state.age}
                        onChange={this.handleOnChange}
                    />
                    <br />
                    <input 
                        type="radio" 
                        name='gender' 
                        placeholder='gender' 
                        value='male'
                        checked={this.state.gender === 'male'}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="gender">male</label>
                    <br />
                    <input 
                        type="radio" 
                        name='gender' 
                        placeholder='gender' 
                        value='female'
                        checked={this.state.gender === 'female'}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="gender">female</label>
                    <br />
                    <select 
                        name="destination"
                        onChange={this.handleOnChange}
                    >
                        <option value="">-- chose your destination --</option>
                        <option value="Lot">Lot</option>
                        <option value="Tel-Aviv">Tel-Aviv</option>
                        <option value="Jerusalaem">Jerusalaem</option>
                    </select>
                    <br />
                    <input 
                        type="checkbox" 
                        name="dietaryRestrictions"
                        value="isVegan"
                        checked={this.state.dietaryRestrictions.isVegan}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="isVegan">Is vegan</label>
                    <br />
                    <input 
                        type="checkbox" 
                        name="dietaryRestrictions"
                        value="isKosher"
                        checked={this.state.dietaryRestrictions.isKosher}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="isKosher">Is kosher</label>
                    <br />
                    <input 
                        type="checkbox" 
                        name="dietaryRestrictions"
                        value="isLactoseFree"
                        checked={this.state.dietaryRestrictions.isLactoseFree}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="isLactoseFree">Is lactose free</label>
                    <br />
                </form>
                <br />
                <h3>Resulted data:</h3>
                <div>Your name: {this.state.firstName} {this.state.lastName}</div>
                <div>Your age: {this.state.age}</div>
                <div>Your gender: {this.state.gender}</div>
                <div>Your destination: {this.state.destination}</div>
                
                <div>Your diet: {'\n'}
                    {
                    ['isVegan', 'isKosher', 'isLactoseFree']
                        .filter(item => this.state.dietaryRestrictions[item])
                        .map(item => {
                            switch (item) {
                                case 'isVegan' :
                                    return 'vegan'                                
                                case 'isKosher' :
                                    return 'kosher'                                
                                case 'isLactoseFree' :
                                    return 'lactose free'                                
                                default: 
                                    return null; 
                            }
                        })
                        .join(', ')
                    }
                    
                </div>
            </div>
        )
    }
}

export default HotelForm;