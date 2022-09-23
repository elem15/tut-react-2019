import React from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
const App = () => {
    return (
        <div>
            <Header logged={false} />
            <Main />
            <Footer />        
        </div>
    )
}

export default App;