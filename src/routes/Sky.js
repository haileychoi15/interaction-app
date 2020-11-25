import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import axios from "axios";
import {useEventListener} from "../hooks/useEventListener";

const SkyContainer = styled.div`
  width: 100vw;
  height: 100%;
  padding-top: 4rem;
`;

const ImagesBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-flow: column wrap;
  margin-top: 1rem;
  &::before,
  &::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
  }
  ${props => props.height && css`
    height: ${props.height};
  `}
`;

const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: #ddd;
  ${props => props.itemHeight && css`
    height: ${props.itemHeight};
  `}
  & + & {
    margin-top: 1rem;
  }
  &:first-child {
        margin-top: 1rem;
  }
  @media screen and (min-width: 850px) {
      &:nth-child(2n+1) { 
        order: 1; 
      }
      &:nth-child(2n) { 
        order: 2; 
        margin-left: 1rem;
      }
  }
  @media screen and (min-width: 1260px) {
      &:nth-child(2n) {
        margin-left: 0;
      }
      &:nth-child(3n+1) { 
        order: 1; 
      }
      &:nth-child(3n+2) { 
        order: 2; 
        margin-left: 1rem;
      }
      &:nth-child(3n)   { 
        order: 3; 
        margin-left: 1rem;
      }
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 3rem;
  //background-color: lightskyblue;
`;

function Sky() {

    const [items, setItems] = useState([]);
    const [height, setHeight] = useState("100vh");
    const [windowSize, setWindowSize] = useState("large");
    const [loaded, setLoaded] = useState(false);
    const nextPage = useRef(1);
    const footerRef = useRef();
    const imageRefs = useRef([]);

    const setTotalHeight = () => {
        let totalHeight = 0;
        const marginTop = 16;
        switch (windowSize) {
            case "large":
                {
                    let firstColumn = 0;
                    let secondColumn = 0;
                    let thirdColumn = 0;
                    items.forEach((item, index) => {
                        const count = index + 1;
                        if (count % 3 === 1) {
                            firstColumn += (item.height + marginTop);
                        } else if (count % 3 === 2) {
                            secondColumn += (item.height + marginTop);
                        } else {
                            thirdColumn += (item.height + marginTop);
                        }
                    });
                    totalHeight = String(Math.max(firstColumn, secondColumn, thirdColumn) + marginTop) + "px";
                }
                break;
            case "medium":
                {
                    let firstColumn = 0;
                    let secondColumn = 0;
                    items.forEach((item, index) => {
                        const count = index + 1;
                        (count % 2 === 1)
                            ? firstColumn += (item.height + marginTop)
                            : secondColumn += (item.height + marginTop);
                    });
                    totalHeight = String(Math.max(firstColumn, secondColumn) + marginTop) + "px";
                }
                break;
            case "small":
                {
                    let newHeight  = 0;
                    items.forEach((item) => {
                        newHeight += (item.height + marginTop);
                    });
                    totalHeight = String(Math.ceil(newHeight) + marginTop) + "px";
                }
                break;
        }
        setHeight(totalHeight);
    }

    const handleLazyLoading = async () => {
        await setImageRefs();
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    entry.target.src = entry.target.dataset.src;
                }
            });
        }, { threshold: 0 });
        imageRefs.current.forEach((image, index) => observer.observe(imageRefs.current[index].current));
        return () => observer.disconnect();
    }

    useEffect(()=> {
        setTotalHeight();
        handleLazyLoading();
    }, [items, windowSize]);

    const handleObserver = async (entries) => {
        if (entries[0].isIntersecting) {
            nextPage.current += 1;
            const images = await getImages(nextPage.current);
            setItems(items => [...items, ...images]);
        }
    }

    useEffect(()=> {
        if (loaded) {
            const { current } = footerRef;
            const observer = new IntersectionObserver(handleObserver, { threshold: 0 });
            observer.observe(current);
            return () => observer.unobserve(current);
        }
    }, [loaded]);

    const setImageRefs = () => {
        items.forEach((item, index) => {
            if (imageRefs.current[index] === undefined) {
                imageRefs.current[index] = React.createRef();
            }
        })
    }

    const getImages = async (page) => {
        const appkey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
        const text = "sky";
        const photosCount = 30;
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
                url: result.urls.small,
                height: (result.height * 400) / result.width
            }
        });
        return items;
    };

    const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1260) {
            setWindowSize("large");
        } else if (width >= 850) {
            setWindowSize("medium");
        } else {
            setWindowSize("small");
        }
    };

    const init = async () => {
        handleResize();
        const items = await getImages(1);
        await setImageRefs();
        setItems(items);
        setLoaded(true);
    }

    useEffect(()=> {
        init();
    }, []);

    useEventListener(window, "resize", handleResize);

    return (
        <SkyContainer>
            <ImagesBlock height={height}>
                {items.map((item, index) =>
                    <Item key={index}  itemHeight={`${item.height}px`} >
                        <img data-src={item.url} alt={item.title} ref={imageRefs.current[index]} />
                    </Item>
                )}
            </ImagesBlock>
            <Footer ref={footerRef}></Footer>
        </SkyContainer>
    );
}

export default Sky;