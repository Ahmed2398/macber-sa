import React from 'react';
import './Videos.css'
const Videos = ({src, id}) => {
    return (
        <>
            <iframe className="frame-youtube my-3" width="800" height="380" src={src}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>

            </iframe>
        </>
    );
};

export default Videos;