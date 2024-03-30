import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this); // we need to use bind function to bind 'this' to refer to the component
    this.handleDecrement = this.handleDecrement.bind(this); // Otherwise, 'this' will refer the function handleIncrement().
  }
  /**
   * In React, we need to bind event handlers in class components because of how the this keyword works in JavaScript. The this keyword refers to the object it belongs to, and has different values depending on where it's used.
   
   * For example, in a class component, the this keyword refers to the component instance. This means that when we call a method on the component instance, we can use the this keyword to access the component's state and props.
   
   * However, when we pass a method as a callback to another function, the this keyword inside the callback function will refer to the function that called it, not the component instance. This can cause problems if we need to access the component's state or props inside the callback function.
   
   * To fix this problem, we can bind the method to the component instance. This means that when we call the method, the this keyword inside the method will always refer to the component instance, no matter where the method is called from.
   */

  Increment = () => {
    // this.setState({ count: this.state.count + 1 })
  }
  // We can also bind a method to the component instance using an arrow function. Arrow functions are a new feature in ES6, and they allow us to bind a function to the context in which it is defined.

  // Arrow functions adopt the this binding of the enclosing scope (in other words, they don’t change the meaning of this), so things just work automatically.

  handleIncrement() {
    this.setState({count: this.state.count + 1});
  }

  handleDecrement() {
    this.setState({count: this.state.count - 1});
  }
  
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
// Reference: https://www.freecodecamp.org/news/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56