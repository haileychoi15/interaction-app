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
  background: #000;
`;

function SectionTwo({ height }) {

    const canvas = useRef();
    //const stageWidth = useRef(0);
    //const stageHeight = useRef(0);

    const ctx = useRef(null);
    //const { current: canvas } = canvasDom;
    //const ctx = canvas.getContext('2d');

    const [point, setPoint] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [stageWidth, setStageWidth] = useState(0);
    const [stageHeight, setStageHeight] = useState(0);

    const pointUpdate = () => {
        setPoint(point => point + 0.1);
    }

    const waveDraw = () => {
        ctx.current.beginPath();
        ctx.current.fillStyle = "#fff";
        pointUpdate();
    }

    const resize = () => {
        canvas.current.width = stageWidth * 2;
        canvas.current.height = stageHeight * 2; // 레티나 디스플레이 최적화
        ctx.current.scale(2, 2);
        setX(stageWidth / 2);
        setY(stageHeight / 2);
        requestAnimationFrame(() => animate());
    }

    const animate = () => {
        ctx.current.clearRect(0, 0, stageWidth, stageHeight);
        waveDraw();
        requestAnimationFrame(() => animate());
    }

    useEventListener(window, "resize", resize);

    useEffect(() => {
        ctx.current = canvas.current.getContext('2d');
        setStageWidth(document.body.clientWidth);
        setStageHeight(document.body.clientHeight);
    }, []);

    useEffect(() => {
        resize();
    }, [stageWidth, stageHeight]);

    useEffect(() => {
        const max = Math.random() * 100 + 150;
        setY( y => y + Math.sin(point) * max);
    }, [point]);

    useEffect(() => {
        ctx.current.arc(x, y, 30, 0, 2 * Math.PI);
        ctx.current.fill();
    }, [x, y]);

    return (
        <SectionBlock height={height}>
            <Canvas ref={canvas}></Canvas>
        </SectionBlock>
    );
}

export default SectionTwo;