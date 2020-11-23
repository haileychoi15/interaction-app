import React, {useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImages from "./ParallaxImages";
import {useParallax} from "../hooks/useParallax";
import RollingNumbers from "./RollingNumbers";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  background: none;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

const NumberBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin-left: 1rem;
  font-size: 1.5rem;
  color: #eee;
  transform: translateY(1rem);
`;

function SectionThree({ height }) {
    const images = [
        {
            title: "lemon fishes",
            url: "lemonfishes1.png",
            style: {
                top: "5%",
                left: "10%",
                width: "50px",
            },
            speed: 0
        },
        {
            title: "lemon fishes",
            url: "lemonfishes1.png",
            style: {
                top: "0",
                left: "5%",
                width: "70px",
            },
            speed: 0.1
        },
        {
            title: "orange fishes",
            url: "orangefishes1.png",
            style: {
                bottom: "50%",
                left: "7%",
                width: "100px",
            },
            speed: 0.1
        },
        {
            title: "orange fishes",
            url: "orangefishes2.png",
            style: {
                bottom: "30%",
                left: "5%",
                width: "100px",
            },
            speed: 0
        },
        {
            title: "red fishes",
            url: "redfishes3.png",
            style: {
                bottom: 0,
                right: "20%",
                width: "150px",
            },
            speed: -0.03
        },
        {
            title: "red fishes",
            url: "redfishes1.png",
            style: {
                bottom: "0",
                right: "20%",
                width: "150px",
            },
            speed: 0
        },
        {
            title: "red fishes",
            url: "redfishes2.png",
            style: {
                bottom: "40%",
                right: "15%",
                width: "120px",
            },
            speed: 0.1
        },
    ];

    const numbers = [1,0,0,0,0,0,0];

    const thirdSection = useRef();
    const parallaxBlock = useRef();
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        if (thirdSection.current) {
            const sectionHeight = thirdSection.current.offsetTop - window.innerHeight;
            const y = window.scrollY - sectionHeight;
            setScrollY(y);
        }
    }

    useParallax(parallaxBlock, handleScroll, { threshold: 0 });

    return (
        <SectionBlock ref={thirdSection} height={height}>
            <ParallaxBlock ref={parallaxBlock}>
                <ParallaxImages images={images} scrollY={scrollY} />
            </ParallaxBlock>
            <RightBlock>
                <SectionTitle>Diving in the red sea</SectionTitle>
                <SectionContent>
                    The Red Sea is one of the most popular dive destinations in the world and rightly so. You'll find some amazing ship wrecks, tons of sharks, healthy corals and tons of colourful fish. Dolphins also abound, and in the rights spots, you are very likely to dive with some Dugongs.                </SectionContent>
                <NumberBlock>
                    <RollingNumbers numbers={numbers} />
                    <Text>divers in the world</Text>
                </NumberBlock>
            </RightBlock>
        </SectionBlock>
    );
}

export default SectionThree;