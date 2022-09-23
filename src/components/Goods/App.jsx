import React from 'react';
import Product from './Product-class';
import { data } from '../../data/facer';

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
        <div>
            {products}
        </div>
    )
}

export default App;