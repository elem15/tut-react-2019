import React from 'react';

const SocialFormComponent = (props) => {
    return (
        <div>
        <h2>Social</h2>
        <form onSubmit={props.handleOnSubmit}>
            <input type="text" name='firstName' placeholder='First Name'
                onChange={props.handleNameOnChange} value={props.firstName} />
            <br />
            <input type="text" name='lastName' placeholder='Last Name'
                onChange={props.handleNameOnChange} value={props.lastName} />
            <br />
            <textarea name="about" cols="30" rows="10" placeholder='Same textarea' value={props.about} onChange={props.handleNameOnChange}/>
            <br />
            <input type="checkbox" name='isFriend' checked={props.isFriend} onChange={props.handleNameOnChange} />                        
            <label htmlFor="isFriend">Is a friend</label>
            <br />
            <label>
                <input type="radio" name='gender' value='male' onChange={props.handleNameOnChange} checked={props.gender === 'male'}/> male
            </label>
            <label>
                <input type="radio" name='gender' value='female' onChange={props.handleNameOnChange} checked={props.gender === 'female'}/> female
            </label>
            <br />
            <label>
                <select type="select" name='favColor' select={props.favColor} onChange={props.handleNameOnChange}>
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
        <h3>First Name: {props.firstName}</h3>
        <h3>Last Name: {props.lastName}</h3>
        <h3>Is a friend: {props.isFriend ? 'Yes' : "No"}</h3>
        <h3>About: {props.about}</h3>
        <h3>You gender is: {props.gender}</h3>
        <h3>Your favorite color is: <span style={{color: props.favColor}}>
            {props.favColor}</span></h3>
    </div>
    )
}

export default SocialFormComponent;