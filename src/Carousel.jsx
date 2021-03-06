import React from 'react';
import styled from 'styled-components';

const imageWidth = 600; //px

const ShowConainer = styled.div`
    height: ${imageWidth}px;
    max-height: 75vh;
    width: ${imageWidth}px;
    margin: 0 auto;
    overflow: hidden;
    @media (max-width: 600px) {
        width: 100vw;
    }
`;

const ImgContainer = styled.div`
    ${props =>
        props.slideIn
            ? `
                display: flex;
                flex: row nowrap;
                position: static;
                width: ${props.imgArr.length * imageWidth}px;
                height: ${imageWidth}px;
                max-height: 75vh;
                transform: translateX(-${props.shift * imageWidth}px);
                transition: transform 0.6s;
                @media (max-width: 600px) {
                    width: ${props.imgArr.length * 100}vw;
                    transform: translateX(-${props.shift * 100}vw);
                }
            `
            : `
                display: block;
                position: relative;
                max-height: 70vh;
                @media (max-width: 600px) {
                    width: 100vw;
                }
              `}
`;

const Img = styled.img`
    width: ${imageWidth}px;
    height: ${imageWidth}px;
    max-height: 75vh;
    @media (max-width: 600px) {
        width: 100vw;
    }
    ${props =>
        props.slideIn
            ? `
                position: static;
              `
            : `
                position: absolute;
                top: 0;
                left: 0;
                opacity: ${props.isCurrent ? 1 : 0};
                z-index: ${props.isCurrent ? 5 : 0}
                transition: opacity 0.9s;
              `};
`;

function Carousel(props) {
    const { shift, imgArr, slideIn } = props;
    return (
        <ShowConainer className="show-container">
            <ImgContainer className="img-container" shift={shift} slideIn={slideIn} imgArr={imgArr}>
                {imgArr.map((img, ind, arr) => (
                    <Img src={img} key={img} isCurrent={arr.indexOf(img) === shift} slideIn={slideIn} />
                ))}
            </ImgContainer>
        </ShowConainer>
    );
}

export default Carousel;
