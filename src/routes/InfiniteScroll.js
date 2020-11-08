import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Li = styled.div`
  margin: 1rem;
/*  display: flex;
  justify-content: center;
  width: 32%;
  margin-bottom: 2%;
  &:nth-child(3n+1) { order: 1; }
  &:nth-child(3n+2) { order: 2; }
  &:nth-child(3n)   { order: 3; }*/
`;

const Image = styled.img`
  border-radius: 6px;
`;

function InfiniteScroll() {

    const getImages = useCallback(async (page) => {
        console.log('page ', page);
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
    //const [height, setHeight] = useState(2000);
    const count = useRef(0);

    const getItems = useCallback( async () => {
        count.current += 1;
        if (count.current > 1) {
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
    }, [getScrollValue, getImages]);

    useEffect(() => {
        init();
    }, [init]);

    return (
        <>
            <section>
                <h1>Infinite Scroll</h1>
                <article>
                    <Ul>
                        {items.map((item, index) =>
                        <Li key={index}>
                            <Image src={item.url} alt={item.title} title={item.title} />
                        </Li>
                        )}
                    </Ul>
                </article>
                <footer>footer</footer>
            </section>
        </>
    );
}

export default InfiniteScroll;