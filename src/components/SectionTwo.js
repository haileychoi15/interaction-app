import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  background-color: rgb(66, 155, 210);
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const WaveImage = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 200%;
  overflow: hidden;
  @media screen and (min-width: 48rem) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100px;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background: orange;
`;

function SectionTwo({ height, secondSection }) {

/*    const canvasRef = useRef();
    const canvasWidth = useRef(0);
    const canvasHeight = useRef(0);
    const centerX = useRef(0);
    const centerY = useRef(0);
    const ctx = useRef(null);
    const cur = useRef(0);
    const [pointY, setPointY] = useState(canvasHeight.current / 2);

    const pointUpdate = () => {
        const fixedY = centerY.current;
        cur.current = (cur.current + 0.1);
        setPointY(fixedY + (Math.sin(cur.current) * Math.random() * 100 + 100));
    }

    const waveDraw = () => {
        pointUpdate();
    }

    const resize = () => {
        centerX.current = canvasWidth.current / 2;
        centerY.current = canvasHeight.current / 2;
    }

    const animate = () => {
        ctx.current.clearRect(0, 0, canvasWidth.current, canvasHeight.current);
        waveDraw();
        requestAnimationFrame(() => animate());
    }

    useEffect(() => {
        const { current: canvas } = canvasRef;
        const { current: section } = secondSection;
        ctx.current = canvas.getContext("2d");
        canvasWidth.current = section.clientWidth;
        canvasHeight.current = section.clientHeight;
        canvas.width = canvasWidth.current;
        canvas.height = canvasHeight.current;
        resize();
        //requestAnimationFrame(() => animate());
    }, []);

    useEffect(() => {
        ctx.current.arc(centerX.current, pointY, 30, 0, Math.PI * 2);
        ctx.current.fill();
    }, [pointY]);*/

    return (
        <SectionBlock ref={secondSection} height={height} className="section">
            {/*<Canvas ref={canvasRef} className="canvas"></Canvas>*/}
            <WaveImage>
                <Image src={`${process.env.PUBLIC_URL}/images/waves.png`} alt="waves"/>
            </WaveImage>
        </SectionBlock>
    );
}

export default SectionTwo;