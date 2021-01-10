import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Image = styled.img`
  width: 1.3rem;
`;

const Item = ({children, img}) => (
  <Wrapper>
  {img && <Image src={img} />}
    {children}
  </Wrapper>
);

Item.propTypes = {
  children: PropTypes.string.isRequired,
  img: PropTypes.string
}
export default Item;
