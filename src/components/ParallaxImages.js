import React from 'react';
import styled from "styled-components";

const ParallaxImage = styled.img` 
  position: absolute;
`;

function ParallaxImages({ images, scrollY }) {
    return (
        <>
            {images.map((image, index) =>
                <ParallaxImage
                    key={index}
                    src={`${process.env.PUBLIC_URL}/images/${image.url}`}
                    alt={image.title}
                    style={ image.moveSide
                        ? {...image.style, transform: `translateX(${scrollY * image.speed}px)`}
                        : {...image.style, transform: `translateY(${scrollY * image.speed}px)`}
                    }
                    className="item"
                />
            )}
        </>
    );
}

export default ParallaxImages;