import React from 'react';
import './Button.css';

function Button(props) {
    const { name, direction } = props;
    return (
        <div className="button-wrap">
            <button className={'button ' + direction} aria-label={direction}>
                {name}
            </button>
        </div>
    );
}

export default Button;
