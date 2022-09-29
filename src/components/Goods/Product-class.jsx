import React, { Component } from 'react';

class ProductClass extends Component {
    constructor () {
        super()
        this.state = {
            visible: false,
        }
    }
    setVisibleHandle() {
        this.setState(({visible}) => ({visible: !visible}));
    }
    render() {
        const { company, price, about } = this.props; 
        return (
            <div>
                <h3>Company: {company}</h3>
                <p>Price: {price.toLocaleString("us-US", {style: 'currency', currency: "USD"})}</p>
                <button onClick={this.setVisibleHandle.bind(this)}>{
                    this.state.visible
                        ? 'Hide description' 
                        : 'Show description'
                    }</button>
                <p style={{display: !this.state.visible && 'none' }}>Description: {about}</p>
            </div>
        )
    }
}

export default ProductClass;
