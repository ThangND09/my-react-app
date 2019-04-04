import React, { Component } from 'react';

class Joke extends Component{
    render(){
        const { setup, punchline} = this.props.joke;
        return(
            <p>{setup} <em>{punchline}</em></p>
        )
    }
}

class Jokes extends Component{

    state = {joke:{}, jokes:[]}

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke:json}));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes:json}));
    }

    render(){
        const { setup, punchline} = this.state.joke;
        return(
            <div>
                <h2>Random Joke</h2>
                <Joke key={this.state.joke.id} joke={this.state.joke} />
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke => (
                        <Joke key={joke.id} joke={joke} />
                    ))
                }
            </div>
        )
    }
}

export default Jokes;