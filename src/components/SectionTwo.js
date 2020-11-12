import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import {useEventListener} from "../hooks/useEventListener";

const SectionBlock = styled.div`
  width: 100%;
  background: orange;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  z-index: 10000;
`;

function SectionTwo({ height, secondSection }) {
    return (
        <SectionBlock height={height}>
            <Canvas ref={secondSection}></Canvas>
        </SectionBlock>
    );
}

export default SectionTwo;