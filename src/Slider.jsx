import React, { useState } from 'react';
import Button from './Button';
import './Slider.css';
import Carousel from './Carousel';
import Dots from './Dots';
import styled from 'styled-components';

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';

const Setting = styled.button`
    background-color: #282c34;
    color: #fff;
    border: 2px solid #13a303;
    border-radius: 20px;
    padding: 0.5em 4em;
    font-size: 1.4em;
`;

const StyledSlider = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100vw;
`;

function Slider(props) {
    const [shift, setShift] = useState(0);
    const [slideIn, setSlideIn] = useState(true);

    const imgArr = [img1, img2, img3, img4];

    const next = () => setShift(cur => (cur + 1) % imgArr.length);
    const prev = () => setShift(cur => (cur - 1 < 0 ? imgArr.length - 1 : cur - 1));

    const settingHandler = () => {
        setSlideIn(cur => !cur);
        setShift(0);
    };

    const dotHandler = e => setShift(Number(e.target.id[4]));

    return (
        <main>
            <p>
                <Setting className="setting" onClick={settingHandler} aria-label="change setting button">
                    {slideIn ? 'Slide in' : 'Fade in'}
                </Setting>
            </p>
            <StyledSlider>
                <Button name="<" direction="previous" onClick={prev} />
                <Carousel shift={shift} imgArr={imgArr} slideIn={slideIn} />
                <Button name=">" direction="next" onClick={next} />
            </StyledSlider>
            <Dots imgArr={imgArr} shift={shift} dotHandler={dotHandler} />
        </main>
    );
}

export default Slider;
