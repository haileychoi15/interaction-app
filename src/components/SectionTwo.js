import React from "react";
import styled, {css} from "styled-components";

const SectionBlock = styled.div`
  width: 100%;
  background: none;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

function SectionTwo({ height }) {
    return (
        <SectionBlock height={height}>
            <div>section2</div>
        </SectionBlock>
    );
}

export default SectionTwo;