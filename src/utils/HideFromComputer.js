import React from "react";
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
