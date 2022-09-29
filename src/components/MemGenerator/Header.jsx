import React, { Component } from 'react';

class Header extends Component {
    state = {
        img: 'https://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG-Image.png',
    }
    render() {
        return (
            <div>
                MemGenerator
                <br />         
                <img src={this.state.img} alt="troll" />
            </div>

        )
    }
}

export default Header;