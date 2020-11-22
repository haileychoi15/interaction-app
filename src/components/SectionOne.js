import React, {useEffect, useRef, useState} from "react";
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
`;

const SectionTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 600;
`;

const TextBlock = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const Text = styled.span`
  animation-name: text_opacity;
  animation-duration: 1500ms;
  animation-delay: 1500ms;
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
  animation-play-state: paused;
  ${props => props.active && css`
    animation-play-state: running;
  `}
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

    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 1000);
    }, []);

    return (
        <SectionBlock ref={firstSection} height={height}>
            <Fixed>
                <SectionTitle>
                    {initialTexts.map((text, index) =>
                        <div key={index}>
                            <TextBlock key={index}>
                                <Text>{text.text}</Text>
                                <Mask active={active}></Mask>
                            </TextBlock>
                        </div>
                    )}
                </SectionTitle>
            </Fixed>
        </SectionBlock>
    );
}

export default SectionOne;