import React, {useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImages from "./ParallaxImages";
import {useParallax} from "../hooks/useParallax";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  //background-color: #1280c4;
  z-index: 0;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const SectionAbout = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  @media screen and (min-width: 48rem) {
    top: 5rem;
    max-width: 46rem;
    padding: 1rem 1rem 1rem 2rem;
  }
`;

const SectionTitle = styled.h1`
  width: 100%;
  margin: 0 0 1rem;
  font-size: 2.5rem;
  color: #eee;
  text-align: left;
`;

const SectionContent = styled.p`
  width: 100%;
  font-size: 1.2rem;
  color: #eee;
`;

const BottomImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 300px;
`;

const LeftImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  @media screen and (min-width: 48rem) {
    width: 50%;
  }
`;

const RightImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  @media screen and (min-width: 48rem) {
    width: 70%;
  }
`;

const ParallaxBlock = styled.div`
  width: 100%;
  height: 100%;
`;

function SectionFive({ height }) {

    const parallexImages = [
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
                top: "40%",
                right: "10%",
                width: "200px",
            },
            speed: -0.1
        },
        {
            title: "orange fishes",
            url: "orangefishes1.png",
            style: {
                bottom: "65%",
                right: "50%",
                width: "100px",
            },
            speed: 0.1
        },
        {
            title: "orange fishes",
            url: "orangefishes2.png",
            style: {
                bottom: "10%",
                right: "43%",
                width: "100px",
            },
            speed: -0.1
        },
        {
            title: "lemon fishes",
            url: "lemonfishes1.png",
            style: {
                top: "20%",
                left: "5%",
                width: "50px",
            },
            speed: 0.2
        },
        {
            title: "turtle",
            url: "turtle.png",
            style: {
                bottom: "-10%",
                left: "5%",
                width: "150px",
            },
            speed: -0.1
        },
    ];

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
            <SectionAbout>
                <SectionTitle>Ready to Dive?</SectionTitle>
                <SectionContent>
                    Scuba diving is mainly done for the attraction of the unattainable undersea world. It is one area of nature that mankind has not been able to fully control, we simply are not able to breathe underwater. Hence, scuba diving gives us an opportunity to be in that underwater world.
                    We can explore underwater environments through scuba diving. But, Don't forget safety during scuba diving!
                </SectionContent>
            </SectionAbout>
            <BottomImage>
                <LeftImage src={`${process.env.PUBLIC_URL}/images/bottomleft.png`} alt="sand" />
                <RightImage src={`${process.env.PUBLIC_URL}/images/bottomright.png`} alt="sand" />
            </BottomImage>
            <ParallaxBlock ref={parallaxBlock}>
                <ParallaxImages images={parallexImages} scrollY={scrollY} />
            </ParallaxBlock>
        </SectionBlock>
    );
}

export default SectionFive;