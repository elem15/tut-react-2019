import React, { Component } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
class App extends Component {
    state = {
        isLoaded: false,
        isFirstLoading: false
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState(() => ({isFirstLoading: true}))
            setTimeout(() => {
                this.setState(() => ({isLoaded: true}))
            }, 1000)
        }, 500)
    }
    render() {
        return ( 
            !this.state.isFirstLoading 
            ?
            <div>
                Loading...
            </div>
            :
            <div>
                <Header logged={false} />
                <Main isLoaded={this.state.isLoaded}/>
                <Footer />        
            </div>
        )
    }
}

export default App;