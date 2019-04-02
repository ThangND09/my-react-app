import React, { Component } from 'react';
import Projects from './Projects'

class App extends Component {

    // state = {readMore : false};
    
    // changeReadMore = () => {
    //     this.setState({ readMore : !this.state.readMore});
    // }

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
                <h1>Hello 222!</h1>
                <p> My name is Thang</p>
                <p> I am studying React</p>
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
            </div>
        )
    }
}

export default App;