import React, {useCallback, useEffect, useRef, useState} from "react";
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

const DiverImage = styled.div`
  position: sticky;
  top: 20%;
  left: 10%;
  width: 13rem;
  opacity: 0;
  z-index: 10;
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
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const StickyBlock = styled.div`
  position: relative;
  height: 300vh;
  background-color: rgb(66, 155, 210);
  
`;

const SectionBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: none;
  transition: all 500ms linear;
  ${prop => prop.color && css`
    background-color: ${prop.color};
  `}
`;

function Ocean() {

    const [scrollY, setScrollY] = useState(0);
    const [percent, setPercent] = useState(0);
    const [color, setColor] = useState('#b3e5fc');
    const [isScrolling, setIsScrolling] = useState(false);
    const [isTurning, setIsTurning] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const firstSection = useRef();
    const sectionTop = useRef(0);
    const sectionHeight = useRef(0);
    const sectionBottom = useRef(0);

    const setScrollState = useCallback((prevScrollY) => {
        setTimeout(() => {
            const currScrollY = window.pageYOffset;
            (prevScrollY === currScrollY) ? setIsScrolling(false) : setIsScrolling(true);
        }, 100);
    }, []);

    const getScrollPercent = useCallback((scrollY) => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.floor((scrollY / scrollHeight) * 1000) / 10;
        setPercent(scrollPercent);
    }, []);

    const changeBackground = useCallback(() => {
        if (percent < 70) {
            setColor('rgb(66, 155, 210)');
        } else if (percent < 90) {
            setColor('#0288d1');
        } else {
            setColor('#01579b');
        }
    }, [percent]);

    const detectScrolling = useCallback((isPrevActive) => {
        const secOffsetTop = firstSection.current.getBoundingClientRect().top;
        if (isPrevActive && Math.abs(secOffsetTop) >= sectionHeight.current)
            setIsTurning(false);
        else if (!isPrevActive && secOffsetTop === sectionTop.current)
            setIsTurning(false);
        else
            window.requestAnimationFrame(() => detectScrolling(isPrevActive));
    }, []);

    const turnSection = useCallback(() => {
        const isPrevActive = isActive;
        window.scroll({
            top: isPrevActive ? sectionBottom.current : sectionTop.current,
            behavior: 'smooth'
        });
        window.requestAnimationFrame(() => detectScrolling(isPrevActive));
        setIsActive(!isPrevActive);
    }, [isActive, detectScrolling]);

    const detectSection = useCallback((scrollY) => {
        const { current } = firstSection;
        sectionTop.current = current.offsetTop;
        sectionHeight.current = current.offsetHeight;
        sectionBottom.current = sectionTop.current + sectionHeight.current;
        if (sectionTop.current < scrollY && scrollY < sectionBottom.current) {
            if (!isTurning) {
                setIsTurning(true);
                turnSection();
            }
        }
    }, [isTurning, turnSection]);

    const handleScrolling = useCallback(() => {
        const y = window.pageYOffset;
        setScrollY(y);
        changeBackground();
        detectSection(y);
        const prevScrollY = y;
        setScrollState(prevScrollY);
    }, [changeBackground, setScrollState, detectSection]);

    useEffect(() => {
        getScrollPercent(scrollY);
    }, [getScrollPercent, scrollY]);

    useEventListener(window, "scroll", handleScrolling);

    return (
        <>
            <Container>
                <Progress percent={percent} />
                <SectionOne firstSection={firstSection} height="100vh" />
                <SectionTwo height="100vh" />
                <StickyBlock>
                    <DiverImage isScrolling={isScrolling}>
                        <Image src={`${process.env.PUBLIC_URL}/images/diver.png`} alt="diver" />
                    </DiverImage>
                    <SectionBlock color={color}>
                        <SectionThree height="100vh" />
                        <SectionFour height="100vh" />
                        <SectionFive height="100vh" />
                    </SectionBlock>
                </StickyBlock>
            </Container>
        </>
    );
}

export default Ocean;