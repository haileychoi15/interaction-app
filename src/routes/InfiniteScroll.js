import React, {useCallback, useEffect, useState} from "react";
import styled, {css} from "styled-components";

function InfiniteScroll() {
    const initialItems = [
        {
            title: '',
            url: ''
        },
        {
            title: '',
            url: ''
        },
        {
            title: '',
            url: ''
        },
        {
            title: '',
            url: ''
        },
        {
            title: '',
            url: ''
        },
    ];

    const [items, setItems] = useState(initialItems);

    const getScrollPercent = useCallback(() => {

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
                <h1>Infinite Scroll</h1>
                <article>
                    <ul>
                        {items.map((item, index) =>
                        <li key={index}>
                            <img src={item.url} alt={item.title} title={item.title}/>
                        </li>
                        )}
                    </ul>
                </article>
            </section>
        </>
    );
}

export default InfiniteScroll;