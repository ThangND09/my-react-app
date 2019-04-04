import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Titles'
import Jokes from './Jokes'


class App extends Component {

    constructor() {
        super();
        this.state = { readMore : false};
        this.changeReadMore = this.changeReadMore.bind(this);
    }

    changeReadMore() {
        this.setState({ readMore : !this.state.readMore});
    }

    render() {
        return (
            <div> 
                <h1>Hello !</h1>
                <p> My name is Thang</p>
                <p> I am studying React</p>
                <Title/>
                {
                    this.state.readMore ? (
                        <div> 
                            
                            <p> I am living in Da Nang and working for Fsoft </p>
                            <button onClick={this.changeReadMore}>Hide</button>
                        </div>                        
                    ) : (
                        <button onClick={this.changeReadMore}>Read More</button>
                    )
                }   
                <hr/>  
                <Projects/>
                <hr/>  
                <SocialProfiles/>
                <hr/>  
                <Jokes/>
            </div>
        )
    }
}

export default App;