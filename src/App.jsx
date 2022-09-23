import React, { Component } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
class App extends Component {
    state = {
        isLoaded: false,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState(() => ({isLoaded: true}))
        }, 1000)
    }
    render() {
        return (
            !this.state.isLoaded
            ?
            <div>
                LOADING
            </div>
            :
            <div>
                <Header logged={false} />
                <Main />
                <Footer />        
            </div>
        )
    }
}

export default App;