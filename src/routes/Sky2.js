import React, {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import axios from "axios";
import {useEventListener} from "../hooks/useEventListener";

const SkyContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-flow: column wrap;
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

const Text = styled.div`
  position: absolute;
  font-size: 3rem;
  font-weight: 600;
`;

function Sky() {

    const getImages = async () => {
        const appkey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
        const text = "sky";
        const page = 1;
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
                url: result.urls.small,
                height: (result.height * 400) / result.width
            }
        });
        return items;
    };

    const [items, setItems] = useState([]);
    const [height, setHeight] = useState(0);
    const [windowSize, setWindowSize] = useState("large");

    const init = async () => {
        const items = await getImages();
        setItems(items);
    }

    useEffect(()=> {
        init();
    }, []);

    const setTotalHeight = () => {
        let totalHeight = 0;
        if (windowSize === "large") {
            let newHeight  = 0;
            items.forEach((item) => {
                newHeight += item.height;
            });
            totalHeight = String(Math.ceil(newHeight) + 200) + "px";

        } else if (windowSize === "medium") {
            let firstColumn = 0;
            let secondColumn = 0;
            let newHeight  = 0;
            items.forEach((item) => {
                newHeight += item.height;
            });
            totalHeight = String(Math.ceil(newHeight) + 200) + "px";

        } else if (windowSize === "small") {
            let newHeight  = 0;
            items.forEach((item) => {
                newHeight += item.height;
            });
            totalHeight = String(Math.ceil(newHeight) + 200) + "px";
        }
        setHeight(totalHeight);
    }

    useEffect(()=> {
        setTotalHeight();
    }, [items, windowSize]);

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
    useEventListener(window, "resize", handleResize);

    return (
        <SkyContainer height={height}>
            {items.map((item, index) =>
                <Item key={index}>
                    <img src={item.url} alt={item.title} />
                    <Text>{index + 1}</Text>
                </Item>
            )}
        </SkyContainer>
    );
}

export default Sky;