import React from 'react';
import './Button.css';

function Button(props) {
    const { name, direction, onClick } = props;
    return (
        <div className={'button-wrap ' + direction}>
            <button className={'button ' + direction} onClick={onClick} aria-label={direction}>
                {name}
            </button>
        </div>
    );
}

export default Button;
