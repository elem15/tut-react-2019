import React, { Component } from 'react';
import SocialForm from './SocialFormContainer';
import './App.css';
import HotelForm from './HotelFormContainer';

class App extends Component {
    render() {
        return (
            <div className='main'>
                <SocialForm />
                <HotelForm />
            </div>
        )
    }
}

export default App;