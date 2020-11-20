import React, {useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImages from "./ParallaxImages";
import {useParallax} from "../hooks/useParallax";

const SectionBlock = styled.div`
  width: 100%;
  height: 100%;
  background: none;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const Fixed = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  z-index: -10;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 48rem) {
    padding: 2rem;
  }
  ${css`
    background-image: url(${`${process.env.PUBLIC_URL}/images/sky.png`});
  `}
`;

const Title = styled.div`
  font-size: 1rem;
`;

const TextBlock = styled.div`
  font-family: 'Abril Fatface', cursive;
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const Text = styled.p`
  font-size: 3rem;
  font-weight: 600;
  animation-name: text_opacity;
  animation-duration: 1500ms;
  animation-delay: 200ms;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  @keyframes text_opacity {
    0% {
      opacity: 0;
      color: #999;
      transform: translateX(-200px);
    }
    50% {
      opacity: 0;
      color: #333;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      color: #333;
      transform: translateX(0);
    }
  }
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #333;
  animation-name: text_mask;
  animation-duration: 1500ms;
  animation-timing-function: ease-out;
  @keyframes text_mask {
    0% {
      width: 0%;
      transform: translateX(0);
    }
    50% {
      width: 100%;
      transform: translateX(0);
    }
    100% {
      width: 100%;
      transform: translateX(101%);
    }
  }
`;

const SandImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 10%;
  width: 100%;
  @media screen and (min-width: 48rem) {
    bottom: 0;
    width: 80%;
    height: 19rem;
  }
`;

const ParallaxBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const PalmtreeImage = styled.div`
  position: absolute;
  bottom: 20%;
  right: 15%;
  width: 200px;
  @media screen and (min-width: 48rem) {
    width: 400px;
    bottom: 45%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

function SectionOne({ firstSection, height }) {
    const initialTexts = [
        {
            text: "Hailey Choi",
        },
        {
            text: "Welcome to Scuba Diving World",
        },
        {
            text: "Let's get it!",
        },
    ];
    const images = [
        {
            title: "sand",
            url: "sandleft.png",
            style: {
                bottom: "10%",
                left: 0,
                width: "60%"
            },
            speed: -1,
            moveSide: true
        },
        {
            title: "sand",
            url: "sandright.png",
            style: {
                bottom: "10%",
                right: 0,
                width: "100%"
            },
            speed: 1,
            moveSide: true
        }
    ];

    const parallaxBlock = useRef();
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const y = window.scrollY;
        setScrollY(y);
    }

    useParallax(parallaxBlock, handleScroll, { threshold: 0 });

    return (
        <SectionBlock ref={firstSection} height={height}>
            <Fixed>
                <Title>section1</Title>
                <ul>
                    {initialTexts.map((text, index) =>
                        <li key={index}>
                            <TextBlock>
                                <Text>{text.text}</Text>
                                <Mask></Mask>
                            </TextBlock>
                        </li>
                    )}
                </ul>
                <SandImage>
                    <ParallaxBlock ref={parallaxBlock}>
                        {/*<ParallaxImages images={[images[0]]} scrollY={scrollY} />*/}
                        <ParallaxImages images={[images[1]]} scrollY={scrollY} />
                        <PalmtreeImage>
                            <Img src={`${process.env.PUBLIC_URL}/images/palmtree.png`} alt="palmtree" />
                        </PalmtreeImage>
                    </ParallaxBlock>
                </SandImage>
            </Fixed>
        </SectionBlock>
    );
}

export default SectionOne;