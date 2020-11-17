import React, {useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImages from "./ParallaxImages";
import {useParallax} from "../hooks/useParallax";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  background-color: lightskyblue;
  z-index: 0;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const SandImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  padding: 0;
  margin: 0;
  height: 200px;
  overflow: hidden;
  @media screen and (min-width: 48rem) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const ParallaxBlock = styled.div`
  width: 100%;
  height: 100%;
`;

function SectionFive({ height }) {

    const images = [
        {
            title: "yellow fishes",
            url: "yellowfishes1.png",
            style: {
                top: "10%",
                right: "10%",
                width: "100px",
            },
            speed: 0.2
        },
        {
            title: "yellow fishes",
            url: "yellowfishes2.png",
            style: {
                top: "20%",
                right: "15%",
                width: "200px",
            },
            speed: -0.1
        },
        {
            title: "lemon fishes",
            url: "lemonfishes1.png",
            style: {
                bottom: "30%",
                left: "10%",
                width: "50px",
            },
            speed: -0.2
        },
        {
            title: "turtle",
            url: "turtle.png",
            style: {
                bottom: "50%",
                left: "20%",
                width: "150px",
            },
            speed: 0.1
        },
    ]

    const fifthSection = useRef();
    const parallaxBlock = useRef();
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const sectionHeight = fifthSection.current.offsetTop - window.innerHeight;
        const y = window.scrollY - sectionHeight;
        setScrollY(y);
    }

    useParallax(parallaxBlock, handleScroll, { threshold: 0 });

    return (
        <SectionBlock height={height} ref={fifthSection}>
            <SandImage>
                <Image src={`${process.env.PUBLIC_URL}/images/bottomsand.png`} alt="waves"/>
            </SandImage>
            <ParallaxBlock ref={parallaxBlock}>
                <ParallaxImages images={images} scrollY={scrollY} />
            </ParallaxBlock>
        </SectionBlock>
    );
}

export default SectionFive;