import React from "react";
import styled, {css} from "styled-components";

const SectionBlock = styled.div`
  width: 100%;
  background: none;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

function SectionThree({ height }) {
    return (
        <SectionBlock height={height}>
            <div>section3</div>
        </SectionBlock>
    );
}

export default SectionThree;