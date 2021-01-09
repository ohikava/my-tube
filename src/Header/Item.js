import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
`;
const Body = styled.span`
  font-size: 1rem;
`;

const Item = ({i}) => (
  <Wrapper data-testid={'item'}>
    <Icon src={i.icon} />
    <Body>{i.body}</Body>
  </Wrapper>
);

Item.propTypes = {
  i: PropTypes.object.isRequired
};

export default Item;
