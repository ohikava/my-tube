import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const Navigation = ({children}) => {
  return (
    <Wrapper data-testid='navigation'>
      {children}
    </Wrapper>
  )
};

Navigation.propTypes = {
  children: PropTypes.node
};

export default Navigation;
