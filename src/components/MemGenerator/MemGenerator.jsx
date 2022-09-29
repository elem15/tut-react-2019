import React, { Component } from 'react';

class MemGenerator extends Component {
    constructor() {
        super()
        this.state = {
            allDataMemes: {},
            loading: true,
            initTopText: 'You can generate new meme',
            initBottomText: 'Write here!',
            text: '',
            buttonText: '',
            initImg: '',
            initText: ''
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    allDataMemes: data.data.memes,
                    initImg: data.data.memes[0].url,
                    initText: data.data.memes[0].name,
                })
            })
    }

    handleOnClick() {
        const random = Math.floor(Math.random() * this.state.allDataMemes.length);
        this.setState({
            initImg: this.state.allDataMemes[random].url,
            initText: this.state.allDataMemes[random].name,
        })
    }

    handleOnChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.setState((prevState) => ({
            initTopText: this.state.text ? this.state.text : prevState.initTopText,
            initBottomText: this.state.buttonText ? this.state.buttonText: prevState.initBottomText,
            text: '',
            buttonText: ''
        }))
        this.handleOnClick()
    }
    render() {
        return (
            this.state.loading
                ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    <form action="" onSubmit={this.handleOnSubmit}>
                        <input type="text"
                            name='text'
                            placeholder='new tog text'
                            value={this.state.text}
                            onChange={this.handleOnChange}
                        />
                        <input type="text"
                            name='buttonText'
                            placeholder='new bottom text'
                            value={this.state.buttonText}
                            onChange={this.handleOnChange}
                        />
                        <button>Generate</button>
                    </form>
                    <div>
                        <figure>
                            <div className='meme-image'>
                                <h2 className='meme-top-text'>
                                    {this.state.initTopText}
                                </h2>
                                <img                                    
                                    src={this.state.initImg}
                                    alt="meme"
                                    width='300px'
                                />
                                <h3 className='meme-bottom-text'  >
                                    {this.state.initBottomText}
                                </h3>

                            </div>

                            <figcaption>
                                {this.state.initText}
                            </figcaption>
                        </figure>
                    </div>
                </div>
        )
    }
}

export default MemGenerator;