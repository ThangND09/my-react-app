import React, { Component } from 'react';

const TITLES = [
    'a software engineer',
    'a music lover',
    'an enthusiatic learner'
]

class Title extends Component {

    state = { titleIndex: 0, fadeIn: true};

    componentDidMount() {

        this.timeOut = setTimeout(() => this.setState({fadeIn: false}), 2000);

        console.log("Starting did Mount");
        this.animateTitles();
    }

    componentWillUnmount() {
        
        console.log("Title component will unmount");
        clearInterval(this.myInterval);
        clearTimeout(this.timeOut);
    }

    componentWillMount

    animateTitles = () => {
        this.myInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % 3;
            //console.log(titleIndex);
            this.setState({titleIndex, fadeIn: true});
            //console.log('Thangnd15' + this.state.fadeIn);

            this.timeOut = setTimeout(() => this.setState({fadeIn: false}), 2000);
            //console.log('==============' + this.state.fadeIn);
        }, 4000);
    }

    render() {

        const title = TITLES[this.state.titleIndex]

        return(
            // <div>
            //     I am  {TITLES[this.state.titleIndex]}    
            // </div>
            <div>
                <p className={this.state.fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
                <p>FadeIn : {this.state.fadeIn ? '1' : '0'}</p>
            </div>
        )
    }
}

export default Title;
