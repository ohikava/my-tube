import React from 'react';
import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: fixed;
  left: -100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  height: 100vh;
  transition: 1s;
  background: ${props => props.theme.extrcolor};
  top: 0;
  ${props => props.isOpen && css`
    left: 0;
    `}
`;

const MobileMenuContainer = ({isOpen, children}) => (
  <Wrapper isOpen={isOpen} data-testid={'mobilemenucontainer'}>
    {children}
  </Wrapper>
);

MobileMenuContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default MobileMenuContainer;
