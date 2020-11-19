import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImages from "./ParallaxImages";
import {useParallax} from "../hooks/useParallax";
import RollingNumbers from "./RollingNumbers";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  background-color: lightskyblue;
  z-index: 0;
  ${prop => prop.height && css`
    min-height: ${prop.height};
  `}
`;

const ParallaxBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const RightBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  @media screen and (min-width: 48rem) {
    width: 48rem;
    padding: 2rem;
  }
`;

const SectionTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #eee;
`;

const SectionContent = styled.p`
  max-width: 46rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #eee;
  @media screen and (min-width: 48rem) {
    margin-bottom: 5rem;
  }
`;

function SectionThree({ height }) {
    const images = [
        {
            title: "orange fishes",
            url: "orangefishes1.png",
            style: {
                top: "10%",
                left: "10%",
                width: "100px",
            },
            speed: 0.1
        },
        {
            title: "orange fishes",
            url: "orangefishes2.png",
            style: {
                top: "30%",
                left: "10%",
                width: "100px",
            },
            speed: 0
        },
        {
            title: "blue fishes",
            url: "bluefishes3.png",
            style: {
                top: "40%",
                left: "20%",
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

    const numbers = [1,0,0,0,0,0,0];

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
            <RightBlock>
                <SectionTitle>Blue Hole in Dahab</SectionTitle>
                <SectionContent>
                    Blue Hole is a diving location on east Sinai, a few kilometres north of Dahab, Egypt on the coast of the Red Sea. Experience the vast blueness & huge schools of fish, as well as seeing a Hawksbill Turtle who might cruse alongside you.
                </SectionContent>
                <RollingNumbers numbers={numbers} />
                <p>meters depth</p>
            </RightBlock>
        </SectionBlock>
    );
}

export default SectionThree;