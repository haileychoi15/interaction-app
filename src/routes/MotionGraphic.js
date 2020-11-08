import React, {useCallback, useEffect, useState} from "react";
import styled, {css} from "styled-components";

const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 6000px;
`;

const Title = styled.h1`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1rem;
  color: #333;
`;

const Percent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: #333;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 500ms linear;
  ${prop => prop.color && css`
    background-color: ${prop.color};
  `}

  //z-index: -1;
/*  &.active {
    opacity: 1;
    background:
        linear-gradient(#b3e5fc, transparent), //e1f5fe
        linear-gradient(to top left, #81daf4, transparent),
        linear-gradient(to top right, #4fc3f7, transparent);
    background-blend-mode: screen;
  }*/
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function MotionGraphic() {

    const initialImages = [
        {
            title: '아침',
            url: '',
            active: true
        },
        {
            title: '점심',
            url: '',
            active: false
        },
        {
            title: '저녁',
            url: '',
            active: false
        },
        {
            title: '밤',
            url: '',
            active: false
        },
    ];
    const [images, setImages] = useState(initialImages);
    const [percent, setPercent] = useState(0);
    const [color, setColor] = useState('#b3e5fc');

    const changeBackground = (scrollPercent) => {
        console.log(scrollPercent);
        if (scrollPercent < 25) {
            setColor('#81daf4');
        } else if (scrollPercent < 50) {
            setColor('#29b6f6');
        } else if (scrollPercent < 75) {
            setColor('#0288d1');
        } else {
            setColor('#01579b');
        }
    }

    const getScrollPercent = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollY = window.pageYOffset;
        const scrollPercent = Math.floor((scrollY / scrollHeight) * 100);
        setPercent(scrollPercent);
        changeBackground(scrollPercent);
    }, []);

    const init = useCallback(() => {
        window.addEventListener('scroll', getScrollPercent);
    }, [getScrollPercent]);

    useEffect(() => {
        init();
    }, [init]);



    return (
        <>
            <Section>
                <Title>Motion graphic</Title>
                <Percent>{percent}%</Percent>
                <Background color={color}></Background>
            </Section>
        </>
    );
}

export default MotionGraphic;