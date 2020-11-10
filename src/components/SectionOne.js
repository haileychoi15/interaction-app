import React from "react";
import styled, {css} from "styled-components";

const SectionBlock = styled.div`
  width: 100%;
  background: none;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const Fixed = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: lightgoldenrodyellow;
  z-index: -10;
`;

function SectionOne({ firstSection, height }) {
    return (
        <SectionBlock ref={firstSection} height={height}>
            <Fixed>
                <h1>section1</h1>

            </Fixed>
        </SectionBlock>
    );
}

export default SectionOne;