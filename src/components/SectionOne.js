import React from "react";
import styled, {css} from "styled-components";

const SectionBlock = styled.div`
  width: 100%;
  background: none;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

function SectionOne({ height }) {
    return (
        <SectionBlock height={height}>
            <div>section1</div>
        </SectionBlock>
    );
}

export default SectionOne;