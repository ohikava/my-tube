import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  @media(min-width: 768px) {
    flex-direction: row;
  }
`;
const Img = styled.img`
  width: 1.3rem;
    opacity: .6;
`;
const Body = styled.span`
  font-size: .8rem;
  opacity: .6;
  text-transform: uppercase;
`;

const Icon = ({children, cb, icon}) => (
  <Wrapper onClick={cb}>
    <Img src={icon} />
    <Body>{children}</Body>
  </Wrapper>
);

Icon.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string.isRequired,
  cb: PropTypes.func
};

export default Icon;
