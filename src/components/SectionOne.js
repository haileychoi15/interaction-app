import React, {useEffect, useState} from "react";
import styled, {css} from "styled-components";

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
  max-width: 80%;
  padding-top: 8rem;
  margin: 0;
  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const TextBlock = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const Text = styled.span`
  animation-name: text_opacity;
  animation-duration: 1500ms;
  animation-delay: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  ${props => props.style && css`
    font-size: ${props.style.size};
    font-weight: ${props.style.weight};
    color: ${props.style.color};
  `}
  @keyframes text_opacity {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }
    50% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  animation-name: text_mask;
  animation-duration: 1500ms;
  animation-timing-function: ease-out;
  animation-play-state: paused;
  ${props => props.style.color && props.active && css`
    animation-play-state: running;
    background-color: ${props.style.color};
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

const SignBlock = styled.div`
  position: absolute;
  bottom: 170px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignText = styled.h2`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
`;

const SignIcon = styled.div`
  position: relative;
  width: 1rem;
  height: 2rem;
  overflow: hidden;
`;

const SignString = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0.125rem;
  height: 1.5rem;
  background-color: #333;
  animation-name: run_sign;
  animation-play-state: running;
  animation-timing-function: ease-in-out;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  @keyframes run_sign {
    0% {
      top: -2rem;
    }
    100% {
      top: 2rem;
    }
  }
`;

const SignHead = styled.div`
  position: absolute;
  bottom: 0.2rem;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 1rem;
  height: 1rem;
  border-bottom: 0.125rem solid #333;
  border-right: 0.125rem solid #333;
  background: none;
`;

function SectionOne({ firstSection, height }) {
    const initialTexts = [
        {
            text: "Scuba diving in the red sea",
            style: {
                color: "rgb(66, 155, 210)",
                size: "3.25rem",
                weight: 600
            }
        },
        {
            text: "Imagine your underwater adventure",
            style: {
                color: "#333",
                size: "1.875rem",
                weight: 400
            }
        },
        {
            text: "Start with scuba diving",
            style: {
                color: "#333",
                size: "1.875rem",
                weight: 400
            }
        },
    ];

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
    }, []);

    return (
        <SectionBlock ref={firstSection} height={height}>
            <Fixed>
                <SectionTitle>
                    {initialTexts.map((text, index) =>
                        <div key={index}>
                            <TextBlock key={index}>
                                <Text style={text.style}>{text.text}</Text>
                                <Mask style={text.style} active={active}></Mask>
                            </TextBlock>
                        </div>
                    )}
                </SectionTitle>
                <SignBlock>
                    <SignText>
                        Explore
                    </SignText>
                    <SignIcon>
                        <SignString></SignString>
                        <SignHead></SignHead>
                    </SignIcon>
                </SignBlock>
            </Fixed>
        </SectionBlock>
    );
}

export default SectionOne;