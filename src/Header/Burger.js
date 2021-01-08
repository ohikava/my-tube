import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 30px;
  height: 20px;
  position: relative;
  @media(min-width: 760px) {
    display: none;
  }
  &:before {
    content: "";
    background: ${props => props.theme.fontcolor};
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:after {
    content: "";
    background: ${props => props.theme.fontcolor};
    width: 100%;
    height: 1.5px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background: ${props => props.theme.fontcolor};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
`;

const Burger = ({cb}) => (
  <Wrapper onClick={cb} data-testid={'burger'}>
    <Line />
  </Wrapper>
);

Burger.propTypes = {
  cb: PropTypes.func.isRequired
};

export default Burger;
