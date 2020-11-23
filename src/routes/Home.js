import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Li = styled.li`
  border-radius: 20px;
  padding: 2rem;
  color: #eee;
  background-color: rgb(66, 155, 210);
  & + & {
    margin-top: 2rem;
  }
  width: 100%;
  @media screen and (min-width: 48rem) {
    width: 33.25rem;
  }
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 1rem;
`;

function Home() {
    return (
        <HomeContainer>
            <Ul>
                <Li>
                    <Title>Sky</Title>
                    <Content>Main Technique of this section is lazy loading. Every time you reach the bottom of the page, Ten images will be loaded at a time.</Content>
                </Li>
                <Li>
                    <Title>Ocean</Title>
                    <Content>Main Technique of this section is parallax scrolling. Every time you scroll the page, specific images will move with their own speed.</Content>
                </Li>
            </Ul>
        </HomeContainer>
    );
}

export default Home;