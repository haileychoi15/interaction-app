import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  background-color: lightskyblue;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const SandImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  padding: 0;
  margin: 0;
  height: 200px;
  overflow: hidden;
  @media screen and (min-width: 48rem) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const Items = styled.div`
  width: 100%;
  height: 900px;
  font-size: 2rem;
`;

const Item = styled.div` 
  position: absolute;
  color: red;
  &:nth-child(1) {
    top: 0;
    transform: ${props => `translateY(${props.y * 0.1}px)`};
    z-index: 1000;
  }
  &:nth-child(2) {
    top: 10%;
    z-index: 2000;
  }
  &:nth-child(3) {
    top: 30%;
    transform: ${props => `translateY(${props.y * 0.1}px)`};
    z-index: 3000;
  }
  &:nth-child(4) {
    top: 40%;
    z-index: 4000;
  }
  &.parallax {
    //position: fixed;
  }
`;

function SectionFive({ height, fourthSection }) {
    const fifthSection = useRef();
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const sectionHeight = fifthSection.current.offsetTop - window.innerHeight;
        const y = window.scrollY - sectionHeight;
        console.log(y);
        setScrollY(y);
    }

    const observer = new IntersectionObserver(entries => {
        if(entries[0].intersectionRatio > 0) {
            console.log('is Intersecting');
            window.addEventListener('scroll', handleScroll);
        } else {
            console.log('NOT Intersecting');
            window.removeEventListener('scroll', handleScroll);
        }
    }, { threshold: 0 });

    useEffect(() => {
        const items = document.querySelectorAll(".item");
        items.forEach(item => observer.observe(item));
    }, []);

    return (
        <SectionBlock height={height} ref={fifthSection}>
            <SandImage>
                <Image src={`${process.env.PUBLIC_URL}/images/bottomsand.png`} alt="waves"/>
            </SandImage>
            <Items>
                <Item className="item parallax" y={scrollY}>section5</Item>
                <Item className="item parallax" y={scrollY}>fishes</Item>
                <Item className="item parallax" y={scrollY}>HELLO WORLD</Item>
                <Item className="item" y={scrollY}>안녕</Item>
            </Items>
        </SectionBlock>
    );
}

export default SectionFive;