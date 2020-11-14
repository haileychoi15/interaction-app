import React, {useRef} from "react";
import styled, {css} from "styled-components";
import {useEventListener} from "../hooks/useEventListener";

const SectionBlock = styled.div`
  width: 100%;
  background: none;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const Items = styled.div`
  width: 100%;
  height: 900px;
  font-size: 2rem;
  //background: #a4fcd0;
`;

const Item = styled.div`
  position: absolute;
  color: red;
  &:nth-child(1) {
    transform: ${props => `translateY(${props.y * -0.1}px)`};
    z-index: 1000;
  }
  &:nth-child(2) {
    z-index: 2000;
  }
  &:nth-child(3) {
    transform: ${props => `translateY(${props.y * -0.3}px)`};
    z-index: 3000;
  }
  &:nth-child(4) {
    z-index: 4000;
  }
  &.parallax {
    position: fixed;
  }
`;

function SectionFive({ height }) {
    const fifthSection = useRef();
    const y = useRef(0);

    const handleScroll = () => {
        y.current = window.scrollY;
    }

    useEventListener(window, "scroll", handleScroll);
    return (
        <SectionBlock height={height} ref={fifthSection}>
            <Items>
                <Item className="parallax" y={y.current}>section5</Item>
                <Item className="parallax" y={y.current}>fishes</Item>
                <Item className="parallax" y={y.current}>HELLO WORLD</Item>
                <Item y={y.current}>안녕</Item>
            </Items>
        </SectionBlock>
    );
}

export default SectionFive;