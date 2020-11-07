import React, {useCallback, useEffect, useState} from "react";
import styled, {css} from "styled-components";

const Progress = styled.div`
  position: fixed;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  width: 50%;
  height: 60px;
  border: 1px solid #333;
  border-radius: 6px;
  @media screen and (min-width: 48rem) {
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100px;
  }
`;

const Bar = styled.div`
  height: 100%;
  margin-bottom: 1.875rem;
  background-color: #333;
  ${prop => css`
     width: ${prop.percent}%;
  `}
`;

const Text = styled.p`
  font-size: 1.875rem;
  text-align: center;
`;

const Content = styled.div`
  font-size: 7rem;
  @media screen and (min-width: 48rem) {
    font-size: 10.635rem;
  }
`;

function Percentage() {
    const [percent, setPercent] = useState(0);
    const items = ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'];

    const getScrollPercent = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollY = window.pageYOffset;
        const scrollPercent = Math.floor((scrollY / scrollHeight) * 1000) / 10; // 소수점 한 자리까지 보이기
        setPercent(scrollPercent);
    }, []);

    const init = useCallback(() => {
        window.addEventListener('scroll', getScrollPercent);
    }, [getScrollPercent]);

    useEffect(() => {
        init();
    }, [init]);

    return (
        <>
            <section>
                <h1>Scroll Percentage</h1>
                <article>
                    <Progress>
                        <Bar percent={percent}></Bar>
                        <Text>{Math.floor(percent)}%</Text>
                    </Progress>
                    <Content>
                        {items.map((item, index) => <div key={index}>{item}</div>)}
                    </Content>
                </article>
            </section>
        </>
    );
}

export default Percentage;