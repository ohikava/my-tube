import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

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

const Item = ({children, to, className, cb, img}) => (
  <Link to={to}>
  <Wrapper onClick={cb} className={className}>
  {img && <Image src={img} />}
    {children}
  </Wrapper>
  </Link>
);

Item.propTypes = {
  children: PropTypes.string.isRequired,
  img: PropTypes.string,
  cb: PropTypes.func,
  to: PropTypes.string
  //className: techical prop for the styled, you shouldnt use it
}
export default Item;
