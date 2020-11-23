import React from "react";
import styled, {css} from "styled-components";

const ProgressContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  display: none;
  z-index: 1;
  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const ProgressBlock = styled.div`
  border: 1px solid #333;
  background-color: #eee;
  width: 1.5rem;
  height: 6.25rem;
  border-radius: 4px;
`;

const Bar = styled.div`
  width: 100%;
  background-color: #333;
  ${prop => css`
     height: ${prop.percent}%;
  `}
`;

const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Dt = styled.dt`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  z-index: 10;
  @media screen and (min-width: 48rem) {
    font-size: 1rem;
  }
`;

const Dd = styled.dd`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  @media screen and (min-width: 48rem) {
    font-size: 1.2rem;
  }
`;

function Progress({ percent }) {
    return (
        <ProgressContainer>
            <Dl>
                <Dt>Sea level</Dt>
                <Dd>
                    <ProgressBlock>
                        <Bar percent={percent}></Bar>
                    </ProgressBlock>
                </Dd>
                <Dd>{Boolean(Math.floor(percent)) && '-'}{Math.floor(percent)}m</Dd>
            </Dl>
        </ProgressContainer>
    );
}

export default Progress;