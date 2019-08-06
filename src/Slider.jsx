import React from 'react';
import Button from './Button';
import './Slider.css';

function Slider(props) {
    return (
        <div className="slider">
            <Button name="<" direction="previous" />
            <Button name=">" direction="next" />
        </div>
    );
}

export default Slider;
