import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: auto 0;
`;

const Btn = styled.button`
    width: 10vw;
    min-width: 60px;
    height: 10vw;
    min-height: 60px;
    background-color: #282c34;
    color: #fff;
    border-radius: 50%;
    border: 3px solid #13a303;
    font-weight: 900;
    font-size: 3rem;
    &:hover {
        background-color: #13a303;
        color: #000;
    }
`;

function Button(props) {
    const { name, direction, onClick } = props;
    return (
        <Div>
            <Btn className={direction} onClick={onClick} aria-label={direction}>
                {name}
            </Btn>
        </Div>
    );
}

export default Button;
