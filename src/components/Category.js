import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getImages } from "./../actions/index";

function Category({ name, id, params, getImages }) {
  const handleClick = () => {
    params = {
      limit: 10,
      page: 1,
      category_ids: id,
    };
    getImages(params);
  };
  return <OneCategory onClick={handleClick}>{name}</OneCategory>;
}

const OneCategory = styled.button`
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: #008eb2;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #005166;
  }
`;

const mapStateToProps = (state) => {
  return {
    params: state.imageReducer.params,
  };
};

const mapDispatchToProps = {
  getImages,
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
