import React, {useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImages from "./ParallaxImages";
import {useParallax} from "../hooks/useParallax";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  background: none;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const ParallaxBlock = styled.div`
  width: 100%;
  height: 100%;
`;

function SectionFour({ height }) {
    const images = [
        {
            title: "red fishes",
            url: "redfishes1.png",
            style: {
                top: 0,
                right: "10%",
                width: "150px"
            },
            speed: 0.1
        },
        {
            title: "red fishes",
            url: "redfishes3.png",
            style: {
                top: "10%",
                right: "15%",
                width: "150px"
            },
            speed: -0.1
        },
        {
            title: "red fishes",
            url: "redfishes2.png",
            style: {
                top: "20%",
                right: "15%",
                width: "120px"
            },
            speed: 0
        },
        {
            title: "orange fishes",
            url: "orangefishes2.png",
            style: {
                top: "40%",
                right: "10%",
                width: "100px"
            },
            speed: 0
        },
        {
            title: "orange fishes",
            url: "orangefishes1.png",
            style: {
                bottom: "30%",
                left: "10%",
                width: "100px"
            },
            speed: 0
        },
        {
            title: "white fishes",
            url: "whitefishes2.png",
            style: {
                bottom: "0",
                left: "10%",
                width: "200px"
            },
            speed: -0.1
        },
    ]

    const fourthSection = useRef();
    const parallaxBlock = useRef();
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const sectionHeight = fourthSection.current.offsetTop - window.innerHeight;
        const y = window.scrollY - sectionHeight;
        setScrollY(y);
    }

    useParallax(parallaxBlock, handleScroll, { threshold: 0 });

    return (
        <SectionBlock ref={fourthSection} height={height}>
            <ParallaxBlock ref={parallaxBlock} className="items">
                <ParallaxImages images={images} scrollY={scrollY} />
            </ParallaxBlock>
        </SectionBlock>
    );
}

export default SectionFour;