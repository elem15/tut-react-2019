import React, { Component } from 'react';
import SocialForm from './Social-form';
import './App.css';
import HotelForm from './Hotel-form';

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