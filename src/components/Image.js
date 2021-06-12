import React from "react";
import styled from "styled-components";

function Image({ url }) {
  return (
    <ImageBox>
      <img src={url} alt="img" />
    </ImageBox>
  );
}

const ImageBox = styled.div`
  width: 250px;
  height: 200px;
  padding: 10px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Image;
