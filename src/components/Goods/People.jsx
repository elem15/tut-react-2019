import React, { Component } from 'react';

class People extends Component {
    state = {
        loading: false,
        data: {},
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch('https://swapi.dev/api/people/1')
            .then(response => response.json())
            .then((response) => {
                this.setState(({data}) => ({
                    data: { ...data, ...response },
                    loading: false
                }))
            })             
        }
        render() {
        console.log(this.state.data)
        const text = this.state.loading ? 'Loading...' : this.state.data.name
        return (        
                <div>
                    {text}
                </div>
        )
    }
}

export default People;