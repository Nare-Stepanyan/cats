import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { getImages } from "./../actions/index";
import { connect } from "react-redux";

function Main(props) {
  const { images, getImages, params } = props;

  const handleClick = () => {
    const newParams = {
      limit: params.limit + 10,
      page: params.page + 1,
      id: params.id,
    };
    getImages(newParams);
  };

  const imgList = images.map((el) => {
    return <Image key={el.id} url={el.url} />;
  });
  return (
    <MainWrapper>
      {imgList.length > 0 ? (
        <>
          <ImageList>{imgList}</ImageList>
          <LoadMore onClick={handleClick}>
            <a href="#">More</a>
          </LoadMore>
        </>
      ) : (
        <ChooseCategory>
          <h2> Choose from categories!</h2>
        </ChooseCategory>
      )}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 70%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.15);
`;

const ImageList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const LoadMore = styled.div`
  margin: 0 auto;
  a {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border-radius: 10rem;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    font-family: Arial;
    text-decoration: none;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #008eb2;
      border-radius: 10rem;
      z-index: -2;
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: #005166;
      transition: all 0.3s;
      border-radius: 10rem;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      &:before {
        width: 100%;
      }
    }
  }
`;

const ChooseCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 100px auto;
    color: grey;
  }
`;
const mapStateToProps = (state) => {
  return {
    images: state.imageReducer.images,
    params: state.imageReducer.params,
  };
};

const mapDispatchToProps = {
  getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
