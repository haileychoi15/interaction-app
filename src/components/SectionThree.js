import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImage from "../components/ParallaxImage";
import {useEventListener} from "../hooks/useEventListener";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  background: green;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

function SectionThree({ height, secondSection }) {
    const initialImages = [
        {
            title: "blue fishes",
            url: "bluefishes1.png",
            style: {
                top: "10%",
                right: "10%",
                width: "100px",
            }
        },
        {
            title: "blue fishes",
            url: "bluefishes2.png",
            style: {
                top: "20%",
                right: "10%",
                width: "100px",
            }
        },
        {
            title: "blue fishes",
            url: "bluefishes3.png",
            style: {
                top: "40%",
                right: "15%",
                width: "300px",
            }
        },
        {
            title: "white fishes",
            url: "whitefishes1.png",
            style: {
                bottom: "30%",
                left: "10%",
                width: "100px",
            }
        },
        {
            title: "white fishes",
            url: "whitefishes2.png",
            style: {
                bottom: "50%",
                left: "10%",
                width: "150px",
            }
        },
    ]
    const [images, setImages] = useState(initialImages);
    const parallaxBody = useRef(null);
    const parallaxSpeed = useRef(1200);
    const parallaxStartValue = useRef(200);

    const moveParallaxImage = (parallaxDistance) => {
        setImages(
            images.map((image, index) => {
                return {...image, style: {...image.style, transform: parallaxDistance * index }};
            })
        );
    }

    const handleScroll = () => {
        const parallaxTop = parallaxBody.current.offsetTop;
        const parallaxScrollY = window.scrollY - parallaxTop;
        const { current : value } = parallaxStartValue;
        const parallaxPercent = parallaxScrollY / parallaxSpeed.current * 100;
        const parallaxDistance = Math.max(0, Math.min(value, value - (value * (parallaxPercent / 100))));
        moveParallaxImage(parallaxDistance);
    }

    useEventListener(window, "scroll", handleScroll);
    useEffect(() => {
        parallaxBody.current = secondSection.current;
    }, []);


    return (
        <SectionBlock height={height}>
            {images.map((image, index) =>
                <ParallaxImage key={index} image={image} />
            )}
        </SectionBlock>
    );
}

export default SectionThree;