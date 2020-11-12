import React from 'react';
import styled from "styled-components";

const ImageContainer = styled.div`
  position: absolute;
  top: ${props => props.style.top || 'unset'};
  bottom: ${props => props.style.bottom || 'unset'};
  left: ${props => props.style.left || 'unset'};
  right: ${props => props.style.right || 'unset'};
  width: ${props => props.style.width || '200px'};
  transform: ${props => `translateY(${props.style.transform}px)` || 'translateY(0)'};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function ParallaxImage({ image }) {
    return (
        <ImageContainer style={image.style}>
            <Image src={`${process.env.PUBLIC_URL}/images/${image.url}`} alt={image.title} />
        </ImageContainer>
    );
}

export default ParallaxImage;