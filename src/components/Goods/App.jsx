import React from 'react';
import Product from './Product-class';
import { data } from '../../data/facer';
import './Product.css'
import People from './People';

const App = () => {
    const products = data.map(item => (
        <Product 
            key={item.id}
            price={item.price} 
            about={item.about}
            company={item.company}
        />
    ))
    return (
        <div className='main'>
            <div>
                {products}
            </div>
            <People/>
        </div>
    )
}

export default App;