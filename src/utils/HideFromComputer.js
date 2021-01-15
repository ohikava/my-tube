import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const HideFromComputer = ({children, border}) => (
  <>
  {window.innerWidth < border ? children : ""}
  </>
);

HideFromComputer.propTypes = {
  border: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default HideFromComputer;
