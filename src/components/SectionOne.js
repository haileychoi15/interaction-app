import React from "react";
import styled, {css} from "styled-components";
import RollingNumbers from "../components/RollingNumbers"

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
  z-index: -10;
`;

const Title = styled.div`
  font-size: 1rem;
`;

const TextBlock = styled.div`
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

    const today = new Date();
    const numbers = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`.split("");

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
                <div>
                    <RollingNumbers numbers={numbers} />
                </div>
            </Fixed>
        </SectionBlock>
    );
}

export default SectionOne;