import React from 'react';

function Dots(props) {
    const { imgArr, shift, dotHandler } = props;
    return (
        <div className="dot-wrap">
            {imgArr.map((img, ind, arr) =>
                arr.indexOf(img) === shift ? (
                    <button key={img} id={`${ind}`} className="dot current-dot" onClick={dotHandler} aria-label={`slide number${ind}`} />
                ) : (
                    <button key={img} id={`${ind}`} className="dot" onClick={dotHandler} aria-label={`slide number${ind}`} />
                )
            )}
        </div>
    );
}

export default Dots;
