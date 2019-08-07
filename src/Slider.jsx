import React, { useState } from 'react';
import Button from './Button';
import './Slider.css';
import Carousel from './Carousel';

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';

function Slider(props) {
    const [shift, setShift] = useState(0);
    const [slideIn, setSlideIn] = useState(true);

    const imgArr = [img1, img2, img3, img4];

    const nextSlideIn = () => setShift(cur => (cur + 1) % imgArr.length);
    const prevSlideIn = () => setShift(cur => (cur - 1 < 0 ? imgArr.length - 1 : cur - 1));

    // const nextFadeIn = () => console.log('PREV');
    // const prevFadeIn = () => console.log('NEXT');

    const settingHandler = () => setSlideIn(cur => !cur);

    return (
        <div>
            <p>
                <button className="setting" onClick={settingHandler}>
                    {slideIn ? 'Slide in' : 'Fade in'}
                </button>
            </p>
            <div className="slider">
                <Button name="<" direction="previous" onClick={prevSlideIn} />
                <Carousel shift={shift} imgArr={imgArr} slideIn={slideIn} />
                <Button name=">" direction="next" onClick={nextSlideIn} />
            </div>
        </div>
    );
}

export default Slider;
