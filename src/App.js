import React from 'react';
import './App.css';
import Button from './Button';

function App() {
    return (
        <div className="App">
            <header>{/* <h1>FFFFFFFFFFFFFFFFFF</h1> */}</header>
            <Button {...{ direction: 'prev' }} />
            <Button {...{ direction: 'next' }} />
        </div>
    );
}

export default App;
