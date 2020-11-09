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
  transform: rotate(-10deg);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function SectionFour({ height }) {
    const initialImages = [
        {
            title: "red fishes",
            url: "redfishes1.png",
            style: {
                top: 0,
                right: "10%",
                width: "400px"
            }
        },
        {
            title: "red fishes",
            url: "redfishes2.png",
            style: {
                top: "20%",
                right: "10%",
                width: "200px"
            }
        },
        {
            title: "red fishes",
            url: "redfishes3.png",
            style: {
                top: "30%",
                right: "15%",
                width: "300px"
            }
        },
        {
            title: "yellow fishes",
            url: "yellowfishes.png",
            style: {
                bottom: "30%",
                left: "10%",
                width: "100px"
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

export default SectionFour;