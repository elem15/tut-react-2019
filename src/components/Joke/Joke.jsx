import React from 'react';

class Joke extends React.Component {
    render () {
        const { q, a } = this.props;
        return (
            <div>
                <h3 style={{display: !q && 'none'}}>Question: {q}</h3>
                <h3 style={{display: !a && 'none', color: !q && 'gray'}}>Answer: {a}</h3>
                <hr></hr>
            </div>
        )
    }
}

export default Joke; 
