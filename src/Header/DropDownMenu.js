import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import Item from "./Item";

const Wrapper = styled.div`
  display: ${props => props.open ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
  top: 100%;
  z-index: 2;
  right: 0;
  width: 130px;
  background: #fff;
  padding: 10px 15px 10px 15px;
  box-shadow: 0px 0px 5px #000;
  div {
    font-size: 1.1rem;
    &:hover {
      color: ${props => props.theme.activecold};
    }
  }

`;

const DropDownMenu = ({children, open}) => (
  <Wrapper open={open} data-testid="dropdownmenu">
    {
      children
    }
  </Wrapper>
);

DropDownMenu.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
};

export default DropDownMenu;
