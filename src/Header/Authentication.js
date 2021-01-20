import React,{useState} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import Login from "./Login";
import Register from "./Register";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  width: 100%;
  padding: 0 15px;
  overflow: scroll;
  height: 100vh;
  transition: 1s;
  left: -100%;
  background: #fff;
  z-index: 5;
  ${props => props.open && css`
      left: 0;
    `}

  @media(min-width: 768px) {
    width: 40%;
    height: auto;
    overflow: hidden;
    left: 50%;
    display: ${props => props.open ? "flex" : 'none'};
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media(min-width: 1024px) {
    width: 20%;
  }
`;

const Togglers = styled.div`
  display: grid;
  margin: 0 -15px;
  grid-template-columns: 4fr 4fr 1fr;
  position: relative;
`;
const Button = styled.button`
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  height: 50px;
  transition: 1s;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #000;
  ${props => props.isActive && css`
      color: #fff;
      background: ${props => props.theme.maincolor};
    `}
`;

const Close = styled(Button)`
  img {
    width: 1rem;
    filter: ${props => props.theme.activecoldfilter};
  }
`;
const Authentication = ({open, cb, page, changePage}) => {
  return (
    <Wrapper open={open}>
      <Togglers page={page}>
        <Button isActive={page === 1} onClick={() => changePage(1)}>Login</Button>
        <Button isActive={page === 0} onClick={() => changePage(0)}>Register</Button>
        <Close onClick={cb}><img src="/close.svg" /></Close>
      </Togglers>
      {
        page === 1 ? <Login /> : <Register />
      }
    </Wrapper>
  )
};

Authentication.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cb: PropTypes.func
};

export default Authentication;
