import React from 'react';

const HotelFormComponent = (props) => {
    return (
        <div>
            <h2>Hotel</h2>
            <form action="">
                <input
                    type="text"
                    name='firstName'
                    placeholder='first name'
                    value={props.firstName}
                    onChange={props.handleOnChange}
                />
                <br />
                <input
                    type="text"
                    name='lastName'
                    placeholder='last name'
                    value={props.lastName}
                    onChange={props.handleOnChange}
                />
                <br />
                <input
                    type='number'
                    min='6'
                    max='91'
                    name='age'
                    placeholder='enter your age'
                    value={props.age}
                    onChange={props.handleOnChange}
                />
                <br />
                <input
                    type="radio"
                    name='gender'
                    placeholder='gender'
                    value='male'
                    checked={props.gender === 'male'}
                    onChange={props.handleOnChange}
                />
                <label htmlFor="gender">male</label>
                <br />
                <input
                    type="radio"
                    name='gender'
                    placeholder='gender'
                    value='female'
                    checked={props.gender === 'female'}
                    onChange={props.handleOnChange}
                />
                <label htmlFor="gender">female</label>
                <br />
                <select
                    name="destination"
                    onChange={props.handleOnChange}
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
                    checked={props.dietaryRestrictions.isVegan}
                    onChange={props.handleOnChange}
                />
                <label htmlFor="isVegan">Is vegan</label>
                <br />
                <input
                    type="checkbox"
                    name="dietaryRestrictions"
                    value="isKosher"
                    checked={props.dietaryRestrictions.isKosher}
                    onChange={props.handleOnChange}
                />
                <label htmlFor="isKosher">Is kosher</label>
                <br />
                <input
                    type="checkbox"
                    name="dietaryRestrictions"
                    value="isLactoseFree"
                    checked={props.dietaryRestrictions.isLactoseFree}
                    onChange={props.handleOnChange}
                />
                <label htmlFor="isLactoseFree">Is lactose free</label>
                <br />
            </form>
            <br />
            <h3>Resulted data:</h3>
            <div>Your name: {props.firstName} {props.lastName}</div>
            <div>Your age: {props.age}</div>
            <div>Your gender: {props.gender}</div>
            <div>Your destination: {props.destination}</div>

            <div>Your diet: {'\n'}
                {
                    ['isVegan', 'isKosher', 'isLactoseFree']
                        .filter(item => props.dietaryRestrictions[item])
                        .map(item => {
                            switch (item) {
                                case 'isVegan':
                                    return 'vegan'
                                case 'isKosher':
                                    return 'kosher'
                                case 'isLactoseFree':
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
export default HotelFormComponent;