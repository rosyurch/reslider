import React from 'react';
import './Button.css';

function Button(props) {
    const { direction } = props;
    return (
        <div>
            <button>{direction === 'prev' ? '<' : '>'}</button>
        </div>
    );
}

export default Button;
