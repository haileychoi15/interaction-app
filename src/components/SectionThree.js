import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImage from "../components/ParallaxImage";
import {useEventListener} from "../hooks/useEventListener";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
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
    const parallaxSection = useRef(null);
    const parallaxSpeed = useRef(1200);
    const parallaxDefaultValue = useRef(200);

    const moveParallaxImage = (parallaxDistance) => {
        setImages(
            images.map((image, index) => {
                return {...image, style: {...image.style, transform: parallaxDistance * index }};
            })
        );
    }

    const handleScroll = () => {
        const parallaxTop = parallaxSection.current.offsetTop;
        const parallaxScrollY = window.scrollY - parallaxTop;
        const { current : speed } = parallaxSpeed;
        const { current : value } = parallaxDefaultValue;
        const parallaxPercent = parallaxScrollY / speed * 100;
        const parallaxDistance = value - (value * (parallaxPercent / 100));
        if (0 <= parallaxDistance && parallaxDistance <= value){
            moveParallaxImage(parallaxDistance);
        }
    }

    useEventListener(window, "scroll", handleScroll);
    useEffect(() => {
        parallaxSection.current = secondSection.current;
    }, [secondSection]);

    return (
        <SectionBlock height={height}>
            {images.map((image, index) =>
                <ParallaxImage key={index} image={image} />
            )}
        </SectionBlock>
    );
}

export default SectionThree;