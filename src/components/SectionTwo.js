import React, {useRef, useState} from "react";
import styled, {css} from "styled-components";
import ParallaxImages from "./ParallaxImages";
import {useParallax} from "../hooks/useParallax";

const SectionBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  background-color: rgb(66, 155, 210);
  ${prop => prop.height && css`
    min-height: ${prop.height};
  `}
  @media screen and (min-width: 75rem) {
    flex-direction: row;
    padding: 0 0 0 2rem;
  }
`;

const WaveImage = styled.div`
  position: absolute;
  top: -150px;
  left: 0;
  width: 200%;
  @media screen and (min-width: 48rem) {
    width: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 155px;
  z-index: -10;
`;

const LeftBlock = styled.div`
  padding: 2rem 0;
  margin-right: 0;
  @media screen and (min-width: 75rem) {
    margin-right: 5%;
  }
`;

const SectionTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #eee;
`;

const SectionContent = styled.p`
  max-width: 46rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #eee;
  @media screen and (min-width: 48rem) {
    margin-bottom: 3rem;
  }
`;

const Articles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #eee;
  @media screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ArticleBlock = styled.article`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 15px;
  padding: 1rem;
  z-index: 1;
  & + & {
    margin-top: 2rem;
    margin-left: 0;
  } 
  @media screen and (min-width: 48rem) {
    flex-direction: column;
    width: 250px;
    & + & {
      margin-top: 0;
      margin-left: 3rem;
    } 
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
  transform: translateY(1rem);
  z-index: 0;
  ${ArticleBlock}:hover &{
    opacity: 1;
    transform: translateY(0);
  }
`;

const ArticleImage = styled.div`
  flex-shrink: 0;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin: 0 2rem 0 0;
  background: lightskyblue;
  transition: box-shadow 200ms ease-in-out;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
  ${ArticleBlock}:hover &{
    box-shadow: none;
  }
  @media screen and (min-width: 48rem) {
    margin: 0 auto 2rem;
  }
`;

const ArticleDescription = styled.div`
    z-index: 1;
`;

const ArticleTitle = styled.h2`
  margin: 1rem 0;
  font-size: 1.3rem;
  font-weight: 500;
  @media screen and (min-width: 48rem) {
     margin: 0 0 1rem;
  }
`;

const ArticleContent = styled.p`
  font-size: 1rem;
  font-weight: 300;
  @media screen and (min-width: 48rem) {
    min-height: 150px;
  }
`;

const RightBlock = styled.div`
  position: relative;
  display: none;
  width: 100%;
  height: 100vh;
  color: #eee;
  @media screen and (min-width: 75rem) {
    display: block;
    flex-grow: 1;
  }
`;

const ParallaxBlock = styled.div`
  width: 100%;
  height: 100%;
`;

function SectionTwo({ height }) {

    const articles = [
        {
            title: "01 Open Water",
            content: "During the PADI Open Water Diver course, you’ll learn what you need to know to explore the underwater world using scuba. Most people find it a rewarding challenge."
        },
        {
            title: "02 Advanced",
            content: "This course can be taken after completing the PADI Open Water Diver certification. It's titled PADI Advanced Open Water Diver because it advances your diving knowledge & skills."
        },
        {
            title: "03 Divemaster",
            content: "Start here to become a PADI dive Instructor. Share your passion with others and help them experience the same joy you have for scuba diving."
        }
    ];

    const images = [
        {
            title: "white fishes",
            url: "whitefishes1.png",
            style: {
                top: "0",
                left: "10%",
                width: "100px",
            },
            speed: 0.2
        },
        {
            title: "white fishes",
            url: "whitefishes2.png",
            style: {
                top: "30%",
                left: "15%",
                width: "150px",
            },
            speed: 0
        },
        {
            title: "blue fishes",
            url: "bluefishes1.png",
            style: {
                top: "70%",
                left: "15%",
                width: "100px",
            },
            speed: -0.1
        },
        {
            title: "blue fishes",
            url: "bluefishes3.png",
            style: {
                top: "60%",
                left: "25%",
                width: "200px",
            },
            speed: 0
        }
    ];

    const secondSection = useRef();
    const parallaxBlock = useRef();
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const sectionHeight = secondSection.current.offsetTop - window.innerHeight;
        const y = window.scrollY - sectionHeight;
        setScrollY(y);
    }

    useParallax(parallaxBlock, handleScroll, { threshold: 0 });

    return (
        <SectionBlock ref={secondSection} height={height}>
            <LeftBlock>
                <SectionTitle>
                    What is Scuba Diving?
                </SectionTitle>
                <SectionContent>
                    Scuba diving is mainly done for the attraction of the unattainable undersea world. It is one area of nature that mankind has not been able to fully control, we simply are not able to breathe underwater. Hence, scuba diving gives us an opportunity to be in that underwater world.
                    We can explore underwater environments through scuba diving. But, Don't forget safety during scuba diving!
                </SectionContent>
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
            </LeftBlock>
            <RightBlock>
                <ParallaxBlock ref={parallaxBlock}>
                    <ParallaxImages images={images} scrollY={scrollY} />
                </ParallaxBlock>
            </RightBlock>
            <WaveImage>
                <Image src={`${process.env.PUBLIC_URL}/images/waves.png`} alt="waves" />
            </WaveImage>
        </SectionBlock>
    );
}

export default SectionTwo;