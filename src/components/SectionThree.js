import React, {useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImages from "./ParallaxImages";
import {useParallax} from "../hooks/useParallax";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  background-color: lightskyblue;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const ParallaxBlock = styled.div`
  width: 100%;
  height: 100%;
`;

function SectionThree({ height }) {
    const images = [
        {
            title: "orange fishes",
            url: "orangefishes1.png",
            style: {
                top: "10%",
                right: "10%",
                width: "100px",
            },
            speed: 0.1
        },
        {
            title: "orange fishes",
            url: "orangefishes2.png",
            style: {
                top: "30%",
                right: "10%",
                width: "100px",
            },
            speed: 0
        },
        {
            title: "blue fishes",
            url: "bluefishes3.png",
            style: {
                top: "40%",
                right: "20%",
                width: "200px",
            },
            speed: -0.1
        },
        {
            title: "white fishes",
            url: "whitefishes1.png",
            style: {
                bottom: "30%",
                left: "10%",
                width: "100px",
            },
            speed: 0
        },
        {
            title: "white fishes",
            url: "whitefishes2.png",
            style: {
                bottom: "80%",
                left: "10%",
                width: "150px",
            },
            speed: 0.2
        },
    ];

    const thirdSection = useRef();
    const parallaxBlock = useRef();
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const sectionHeight = thirdSection.current.offsetTop - window.innerHeight;
        const y = window.scrollY - sectionHeight;
        setScrollY(y);
    }

    useParallax(parallaxBlock, handleScroll, { threshold: 0 });

    return (
        <SectionBlock ref={thirdSection} height={height}>
            <ParallaxBlock ref={parallaxBlock}>
                <ParallaxImages images={images} scrollY={scrollY} />
            </ParallaxBlock>
        </SectionBlock>
    );
}

export default SectionThree;