import React, {useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImages from "./ParallaxImages";
import {useParallax} from "../hooks/useParallax";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  background-color: rgb(66, 155, 210);
  ${prop => prop.height && css`
    min-height: ${prop.height};
  `}
`;

const MainBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  z-index: 1;
`;

const ParallaxBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Articles = styled.div`
  width: 100%;
  color: #eee;
  @media screen and (min-width: 48rem) {
    width: 42rem;
  }
`;

const ArticleBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  border-radius: 15px;
  background-color: rgba(66, 155, 210, 0);
  z-index: 1;
  & + & {
    margin-top: 1rem;
  }
`;

const ArticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #333;
  transition: all 200ms ease-in-out;
  opacity: 0;
  transform: translateX(1rem);
  z-index: 0;
  ${ArticleBlock}:hover &{
    opacity: 1;
    transform: translateX(0);
  }
`;

const ArticleImage = styled.div`
  flex-shrink: 0;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin: 0 2rem 0 0;
  background: #f3dedb;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;


const ArticleDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
`;

const ArticleTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const ArticleContent = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;


function SectionFour({ height }) {
    const images = [
        {
            title: "red fishes",
            url: "redfishes1.png",
            style: {
                top: 0,
                right: "10%",
                width: "150px"
            },
            speed: 0.1
        },
        {
            title: "red fishes",
            url: "redfishes3.png",
            style: {
                top: "10%",
                right: "15%",
                width: "150px"
            },
            speed: -0.1
        },
        {
            title: "red fishes",
            url: "redfishes2.png",
            style: {
                top: "20%",
                right: "15%",
                width: "120px"
            },
            speed: 0
        },
        {
            title: "orange fishes",
            url: "orangefishes2.png",
            style: {
                top: "40%",
                right: "10%",
                width: "100px"
            },
            speed: 0
        },
        {
            title: "orange fishes",
            url: "orangefishes1.png",
            style: {
                bottom: "30%",
                left: "10%",
                width: "100px"
            },
            speed: 0
        },
        {
            title: "white fishes",
            url: "whitefishes2.png",
            style: {
                bottom: "0",
                left: "10%",
                width: "200px"
            },
            speed: -0.1
        },
    ];

    const articles = [
        {
            title: "Dahab",
            content: "Dahab offers fantastic scuba diving opportunities to suit diving-mad enthusiasts, all the way to dip-in, dip-out divers. Diving here is suitable for beginners, advanced and technical divers alike."
        },
        {
            title: "Sharm El Sheikh",
            content: "Liveaboard operators often require anywhere between 30-50 logged dives as a prerequisite to join trips. Sharm el-Sheikh boasts around 30 different sites to explore on day trips alone. Boats are large, comfortable and purpose built for diving."
        },
        {
            title: "Hurghada",
            content: "There are many itineraries to choose from; some specialise in wrecks whereas others offer a mix of wrecks and reefs. There’s a range of boats available with some of the most luxurious boats plying these routes."
        },
    ];

    const fourthSection = useRef();
    const parallaxBlock = useRef();
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const sectionHeight = fourthSection.current.offsetTop - window.innerHeight;
        const y = window.scrollY - sectionHeight;
        setScrollY(y);
    }

    useParallax(parallaxBlock, handleScroll, { threshold: 0 });

    return (
        <SectionBlock ref={fourthSection} height={height}>
            <MainBlock>
                <Articles>
                    {articles.map((article, index) =>
                        <ArticleBlock key={index}>
                            <ArticleBackground></ArticleBackground>
                            <ArticleImage></ArticleImage>
                            <ArticleDescription>
                                <ArticleTitle>{article.title}</ArticleTitle>
                                <ArticleContent>{article.content}</ArticleContent>
                            </ArticleDescription>
                        </ArticleBlock>
                    )}
                </Articles>
            </MainBlock>
            <ParallaxBlock ref={parallaxBlock} className="items">
                <ParallaxImages images={images} scrollY={scrollY} />
            </ParallaxBlock>
        </SectionBlock>
    );
}

export default SectionFour;