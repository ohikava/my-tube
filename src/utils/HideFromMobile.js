import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const HideFromMobile = ({children, border}) => (
  <>
  {window.innerWidth > border ? children : ""}
  </>
);

HideFromMobile.propTypes = {
  border: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default HideFromMobile;
