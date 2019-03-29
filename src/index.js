import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'));



class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Lion extends Animal {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    test='test';

    sayHello() {
        console.log('Hello!!! My name is', this.test) ;  
    }
}

// var globalHello = "globalHello";

// function newFunction() {
//     var hello = "hello";
// }



var lion = new Lion('123','123','123');
lion.sayHello();