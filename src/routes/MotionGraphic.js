import React, {useCallback, useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {useEventListener} from "../hooks/useEventListener";
import Progress from "../components/Progress";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";

const Container = styled.div`
  position: relative;
  width: 100vw;
`;

const Title = styled.h1`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1rem;
  color: #333;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 1s linear;
  ${prop => prop.color && css`
    background-color: ${prop.color};
  `}
`;

const DiverBlock = styled.div`
  position: fixed;
  top: 15%;
  left: 10%;
  width: 13rem;
  animation-name: moveDiver;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-direction: alternate-reverse;
  animation-play-state: running;
  ${prop => prop.isScrolling && css`
    animation-play-state: paused;
  `}
  @keyframes moveDiver {
    0% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(50px);
    }
  }
  @media screen and (min-width: 48rem) {
    width: 25rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function MotionGraphic() {

    const [percent, setPercent] = useState(0);
    const [color, setColor] = useState('#b3e5fc');
    const [isScrolling, setIsScrolling] = useState(false);

    const detectScrolling = useCallback((prevScrollY) => {
        setTimeout(() => {
            const currScrollY = window.pageYOffset;
            (prevScrollY === currScrollY) ? setIsScrolling(false) : setIsScrolling(true);
        }, 200);
    }, []);

    const changeBackground = (scrollPercent) => {
        if (scrollPercent < 10) {
            setColor('#b3e5fc');
        } else if (scrollPercent < 20) {
            setColor('#81daf4');
        } else if (scrollPercent < 40) {
            setColor('#29b6f6');
        } else if (scrollPercent < 60) {
            setColor('#0288d1');
        } else if (scrollPercent < 80) {
            setColor('#01579b');
        } else {
            setColor('#003865');
        }
    }

    const handleScrolling = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollY = window.pageYOffset;
        const scrollPercent = Math.floor((scrollY / scrollHeight) * 1000) / 10;
        setPercent(scrollPercent);
        changeBackground(scrollPercent);
        detectScrolling(scrollY);
    }, [detectScrolling]);

    const init = useCallback(() => {

    }, []);

    useEventListener(window, "scroll", handleScrolling);
    useEffect(() => {
        init();
    }, [init]);

    return (
        <>
            <Container>
                <Progress percent={percent} />
                <Title>Motion graphic</Title>
                <Background color={color}></Background>
                <DiverBlock isScrolling={isScrolling}>
                    <Image src={`${process.env.PUBLIC_URL}/images/diver.png`} alt="diver" />
                </DiverBlock>
                <SectionOne height="200vh" />
                <SectionTwo height="200vh" />
                <SectionThree height="200vh" />
                <SectionFour height="200vh" />
                <SectionFive height="200vh" />
            </Container>
        </>
    );
}

export default MotionGraphic;