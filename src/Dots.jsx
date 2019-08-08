import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 35px;
    height: 35px;
    margin: 10px;
    border-radius: 50%;
    border: 2px solid #13a303;
    background-color: ${props => (props.isCurrentDot ? '#fff' : '#282c34')};
`;

function Dots(props) {
    const { imgArr, shift, dotHandler } = props;
    return (
        <div className="dot-wrap">
            {imgArr.map((img, ind, arr) => (
                <Button key={img} id={`dot-${ind}`} isCurrentDot={arr.indexOf(img) === shift} onClick={dotHandler} aria-label={`slide number${ind}`} />
            ))}
        </div>
    );
}

export default Dots;
