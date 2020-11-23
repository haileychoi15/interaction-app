import styled from "styled-components";
import React, {useCallback, useEffect, useRef} from "react";

const CountBlock = styled.div`
  position: relative;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #eee;
  transition: transform 1s ease-in-out;
`;

const CountNumber = styled.div`
  height: 77px;
  font-size: 4rem;
  font-weight: 600;
  opacity: 1;
  transition: opacity 500ms 1000ms;
  overflow: hidden;
`;

const ColumnBox = styled.span`
    display: inline-flex;
    flex-direction: column;
    animation-name: roll_number;
    animation-duration: 2000ms;
    animation-delay: 1000ms;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    animation-play-state: paused;
    &.active {
      animation-play-state: running;
    }
    @keyframes roll_number {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: ${props => `translateY(-${props.rollingCount * 77}px)`};
        }
    }
`;

function RollingNumbers({ numbers }) {

    const countBlock = useRef();
    const columnBoxRefs = useRef([]);
    const rollingCount = useRef(24);

    columnBoxRefs.current = numbers.map(
        (ref, index) => columnBoxRefs.current[index] = React.createRef()
    );

    const rollNumbers = useCallback((countBox, index) => {
        const { current } = countBlock;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => {
                    countBox.classList.add('active');
                }, 150 * index);
            }
        }, { threshold: 0 });
        observer.observe(current);
    }, []);

    const createRollingNumbers = useCallback(() => {
        let countBox = null;
        numbers.forEach((number, index) => {

            countBox = columnBoxRefs.current[index].current;
            let counts = [];
            let count = Number(number);

            for (let i = 0; i <= rollingCount.current; i++) {
                const sum = count + i;
                const num = sum >= 10 ? Number(String(sum).slice(1)) : sum;
                counts.push(num);
            }
            counts.reverse();

            let span = null;
            counts.forEach((count) => {
                span = document.createElement("span");
                const node = document.createTextNode(count);
                span.append(node);
                countBox.appendChild(span);
            });
            rollNumbers(countBox, index);
        });
    }, [rollingCount, rollNumbers]);

    useEffect(() => {
        createRollingNumbers();
    }, [createRollingNumbers]);

    return (
        <CountBlock ref={countBlock}>
            <CountNumber>
                {numbers.map((number, index) =>
                    <ColumnBox
                        key={index}
                        ref={columnBoxRefs.current[index]}
                        rollingCount={rollingCount.current}
                    >
                    </ColumnBox>
                )}
            </CountNumber>
        </CountBlock>
    );
}

export default RollingNumbers;