import React from 'react';

function Carousel(props) {
    const { shift, imgArr, slideIn } = props;
    return (
        <div className="show-container">
            <div
                className={slideIn ? 'img-container' : 'img-container fade-in'}
                style={{ transform: `translateX(-${slideIn ? shift * 600 : 0}px)`, width: `${imgArr.length * 600}px` }}
            >
                {imgArr.map((img, ind, arr) => {
                    return arr.indexOf(img) === shift ? <img src={img} alt="" key={img} className="current" /> : <img src={img} alt="" key={img} />;
                })}
            </div>
        </div>
    );
}

export default Carousel;
