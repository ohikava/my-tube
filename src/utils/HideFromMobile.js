import React from "react";
import PropTypes from "prop-types";

const HideFromMobile = ({children, border}) => (
  <>
  {window.innerWidth >= border ? children : ""}
  </>
);

HideFromMobile.propTypes = {
  border: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default HideFromMobile;
