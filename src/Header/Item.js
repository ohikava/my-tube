import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  font-size: 1.3rem;
`;

const Item = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Item.propTypes = {
  children: PropTypes.string.isRequired
}
export default Item;
