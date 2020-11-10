import React, {useState} from "react";
import styled, {css} from "styled-components";

const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  background: none;
  ${prop => prop.height && css`
    height: ${prop.height};
  `}
`;

const FishImages = styled.div`
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function SectionThree({ height }) {
    const initialImages = [
        {
            title: "blue fishes",
            url: "bluefishes1.png",
            style: {
                top: 0,
                right: "10%",
                width: "200px"
            }
        },
        {
            title: "blue fishes",
            url: "bluefishes2.png",
            style: {
                top: "20%",
                right: "10%",
                width: "100px"
            }
        },
        {
            title: "blue fishes",
            url: "bluefishes3.png",
            style: {
                top: "40%",
                right: "15%",
                width: "300px"
            }
        },
        {
            title: "white fishes",
            url: "whitefishes1.png",
            style: {
                bottom: "30%",
                left: "10%",
                width: "100px"
            }
        },
        {
            title: "white fishes",
            url: "whitefishes2.png",
            style: {
                bottom: "50%",
                left: "10%",
                width: "150px"
            }
        },
    ]
    const [images, setImages] = useState(initialImages);
    return (
        <SectionBlock height={height}>
            {images.map((image, index) =>
                <FishImages key={index} style={{...image.style}}>
                    <Image src={`${process.env.PUBLIC_URL}/images/${image.url}`} alt={image.title} />
                </FishImages>
            )}
        </SectionBlock>
    );
}

export default SectionThree;