import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Li = styled.li`
  display: inline-flex;
  flex-wrap: wrap;
`;

function InfiniteScroll() {

    const getImages = useCallback(async (page) => {
        console.log(page);
        const appkey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
        const text = "sky";
        const photosCount = 10;
        const http = axios.create({
            baseURL: "https://api.unsplash.com",
            headers: {
                Authorization: `Client-ID ${appkey}`
            }
        });
        const { data: { results } } = await http.get(`/search/photos?query=${text}&page=${page}&per_page=${photosCount}`);
        const items = results.map((result) => {
            return {
                title: result.alt_description,
                url: result.urls.small
            }
        });
        return items;
    }, []);

    const [items, setItems] = useState([]);
    const count = useRef(0);

    const getItems = useCallback( async () => {
        count.current += 1;
        if (count.current > 10) {
            return false;
        }
        const newItems = await getImages(count.current + 1);
        setItems(items => [...items, ...newItems]);
    }, [getImages]);

    const getScrollValue = useCallback(() => {
        const scrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollY === scrollHeight) {
            getItems();
        }
    }, [getItems]);

    const init = useCallback(async () => {
        window.addEventListener('scroll', getScrollValue);
        const items = await getImages(1);
        setItems(items);
    }, [getScrollValue]);

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
                        <Li key={index}>
                            <img src={item.url} alt={item.title} title={item.title} />
                        </Li>
                        )}
                    </ul>
                </article>
                <footer>footer</footer>
            </section>
        </>
    );
}

export default InfiniteScroll;