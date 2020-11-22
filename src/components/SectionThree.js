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
  @media screen and (min-width: 48rem) {
    margin-bottom: 5rem;
  }
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
                <NumberBlock>
                    <RollingNumbers numbers={numbers} />
                    <Text>divers in the world</Text>
                </NumberBlock>
            </RightBlock>
        </SectionBlock>
    );
}

export default SectionThree;