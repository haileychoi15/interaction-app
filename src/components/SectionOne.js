import React, {useCallback, useEffect, useRef} from "react";
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
  background: lightgoldenrodyellow;
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
  z-index: 20;
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
  z-index: 10;
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

const CountBlock = styled.div`
  position: relative;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #333;
  transition: transform 1s ease-in-out;
`;

const CountTitle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const CountNumber = styled.div`
  height: 74px;
  font-size: 4rem;
  font-weight: 600;
  color: #333;
  opacity: 1;
  transition: opacity 500ms 1000ms;
  overflow: hidden;
`;

const ColumnBox = styled.span`
    display: inline-flex;
    flex-direction: column;
    animation-name: roll_number;
    animation-duration: 2000ms;
    animation-delay: 1000ms;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    animation-play-state: paused;
    &.active {
      animation-play-state: running;
    }
    @keyframes roll_number {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: ${props => `translateY(-${props.rollingCount * 74}px)`};
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
    const initialNumbers = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`.split("");

    const numbersRef = useRef(initialNumbers);
    const columnBoxRefs = useRef([]);
    const rollingCount = useRef(24);

    columnBoxRefs.current = numbersRef.current.map(
        (ref, index) => columnBoxRefs.current[index] = React.createRef()
    );

    const rollNumbers = useCallback((countBox, index) => {
        setTimeout(() => {
            countBox.classList.add('active');
        }, 150 * index);
    }, []);

    const createRollingNumbers = useCallback((numbers) => {
        let countBox = null;
        numbers.forEach((number, index) => {

            countBox = columnBoxRefs.current[index].current;
            let counts = [];
            let count = Number(number);

            for (let i = 0; i <= rollingCount.current; i++) {
                const sum = count + i;
                const num = sum >= 10 ? Number(String(sum).slice(1)) : sum;
                counts.push(num);
            }
            counts.reverse();

            let span = null;
            counts.forEach((count) => {
                span = document.createElement("span");
                const node = document.createTextNode(count);
                span.append(node);
                countBox.appendChild(span);
            });
            rollNumbers(countBox, index);
        });
    }, [rollingCount, rollNumbers]);

    useEffect(() => {
        const { current: numbers } = numbersRef;
        createRollingNumbers(numbers);
    }, [createRollingNumbers]);

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
                    <CountBlock>
                        <CountTitle>today</CountTitle>
                        <CountNumber>
                            {numbersRef.current.map((number, index) =>
                                <ColumnBox
                                    key={index}
                                    ref={columnBoxRefs.current[index]}
                                    rollingCount={rollingCount.current}
                                    className="count_box">
                                </ColumnBox>
                            )}
                        </CountNumber>
                    </CountBlock>
                </div>
            </Fixed>
        </SectionBlock>
    );
}

export default SectionOne;