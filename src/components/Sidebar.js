import styled from "styled-components";
import Category from "./Category";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "./../actions/index";

function Sidebar(props) {
  const { categories } = props;
  useEffect(() => {
    props.getCategories();
    // eslint-disable-next-line
  }, []);

  let categoryList = categories.map((el) => {
    return <Category key={el.id} name={el.name} id={el.id} />;
  });
  return <SidebarWrapper>{categoryList}</SidebarWrapper>;
}

const SidebarWrapper = styled.div`
  width: 25%;
  padding: 20px;
  border: 1px solid lightgrey;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
  };
};

const mapDispatchToProps = {
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
