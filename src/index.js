// Import the React and ReactDOM libraries. 
// Note React and ReactDOM could be renamed to other things, but convention 
// says we'll name it React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return <div>Hi there!</div>;
};

// Take the react component and show it on the screen.
ReactDOM.render(<App />, document.querySelector('#root'));
