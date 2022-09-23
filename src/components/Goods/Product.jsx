import React, { useState } from 'react';

const Product = (props) => {
    const [visible, setVisible] = useState(false);
    const setVisibleHandle = () => {
        setVisible(!visible);
    }
    const { company, price, about } = props; 
    return (
        <div>
            <h3>Company: {company}</h3>
            <p>Price: {price.toLocaleString("us-US", {style: 'currency', currency: "USD"})}</p>
            <button onClick={setVisibleHandle}>{
                visible
                    ? 'Hide description' 
                    : 'Show description'
                }</button>
            <p style={{display: !visible && 'none' }}>Description: {about}</p>
        </div>
    )
}

export default Product;
