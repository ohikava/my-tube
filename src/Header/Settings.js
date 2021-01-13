import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import Item from "./Item";

const Wrapper = styled.div`
  display: ${props => props.open ? "flex" : "none"};
  flex-direction: column;
  position: fixed;
  top: 50px;
  right: 15px;
  width: 120px;
  background: #fff;
  padding: 10px 15px 10px 15px;
  box-shadow: 0px 0px 5px #000;

`;

const Settings = ({children, cbover,cbout, open}) => (
  <Wrapper open={open} onMouseOver={cbover} onMouseOut={cbout}>
    {
      children
    }
  </Wrapper>
);

Settings.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  cbover: PropTypes.func,
  cbout: PropTypes.func
};

export default Settings;
