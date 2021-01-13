import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 1.3rem;
`;

const Item = ({children, className, cb, img}) => (
  <Wrapper onClick={cb} className={className}>
  {img && <Image src={img} />}
    {children}
  </Wrapper>
);

Item.propTypes = {
  children: PropTypes.string.isRequired,
  img: PropTypes.string,
  //className: techical prop for the styled, you shouldnt use it
}
export default Item;
