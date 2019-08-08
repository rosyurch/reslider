import React from 'react';
import styled, { css } from 'styled-components';

const imageWidth = 600; //px

const ShowConainer = styled.div`
    height: ${imageWidth}px;
    width: ${imageWidth}px;
    overflow: hidden;
`;

const ImgContainer = styled.div`
    ${props =>
        props.slideIn
            ? css`
                  display: flex;
                  flex: row nowrap;
                  position: static;
                  width: ${props => props.imgArr.length * imageWidth}px;
                  height: ${imageWidth}px;
                  transform: translateX(-${props.shift * imageWidth}px);
                  transition: transform 0.6s;
              `
            : css`
                  display: block;
                  position: relative;
                  /* width: 600px;
                  height: 600px; */
                  max-height: 70vh;
              `}
`;

const Img = styled.img`
    width: 600px;
    height: 600px;
    ${props =>
        props.slideIn
            ? css`
                  position: static;
              `
            : css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  transition: opacity 0.9s;
                  opacity: ${props => (props.isCurrent ? 1 : 0)};
              `}
`;

function Carousel(props) {
    const { shift, imgArr, slideIn } = props;
    return (
        <ShowConainer className="show-container">
            <ImgContainer className="img-container" shift={shift} slideIn={slideIn} imgArr={imgArr}>
                {imgArr.map((img, ind, arr) => (
                    <Img src={img} alt="" key={img} isCurrent={arr.indexOf(img) === shift} />
                ))}
            </ImgContainer>
        </ShowConainer>
    );
}

export default Carousel;
