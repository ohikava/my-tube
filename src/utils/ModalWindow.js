import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  display: ${props => props.open ? "flex" : "none"};
  flex-direction: column;
  position: fixed;
  z-index: 7;
  width: 150px;
  background: white;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  box-shadow: 0px 0px 5px #000;
  @media(min-width: 768px) {
    width: 200px;
  }
`;

const Title = styled.div`
  font-size: 1.6rem;
  padding: 5px;
`;
const Row = styled.div`
  display: flex;
    border-bottom: 1px solid ${props=> props.theme.activecold};
  justify-content: space-between;
  padding: 0 10px;
`;
const Close = styled.img`
  width: 1rem;
  cursor: pointer;
`;

const ModalWindow = ({children, title, close, open}) => {
  const {i18n, t} = useTranslation();
  return (
    <Wrapper open={open}>
    <Row>
      <Title>
        {t(title)}
      </Title>
      <Close src="close.svg" onClick={close}/>
    </Row>
      {children}
    </Wrapper>
  )
};

ModalWindow.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  close: PropTypes.func
};

export default ModalWindow;
