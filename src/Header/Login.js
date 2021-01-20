import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";

const Wrapper = styled.form`
  display: flex;
  height: 85%;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  gap: 15px;
`;

const Input = styled.input`
  height: 30px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 1.2rem;
  outline: none;
`;
const Label = styled.label`
  font-size: 1.1rem;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const Icons = styled.div`
  display: flex;
  width: 130px;
  margin: auto;
  justify-content: space-between;
`;
const Icon = styled.img`
  width: 2rem;
  cursor: pointer;
`;

const Submit = styled.button`
  width: 40%;
  padding: 10px 0;
  border: none;
  cursor: pointer;
  margin: auto;
  background:${props => props.theme.maincolor};
  font-size: 1.2rem;
`;

const ForgotPassword = styled.span`
  color: ${props => props.theme.activecold};
  font-size: .9rem;
  margin: auto;
`;

const Login = () => {
  const {i18n, t} = useTranslation();
  return (
    <Wrapper>
      <Label>{t('Email')}
      <Input type="email" placeholder="myemail@gmail.com"/>
      </Label>
      <Label>{t('Password')}
      <Input type="password" placeholder="************" />
      </Label>
      <Icons>
        <Icon src="/facebook.svg" />
        <Icon src="/twitter.svg" />
        <Icon src="/google.svg" />
      </Icons>
      <Submit>{t('Login')}</Submit>
      <ForgotPassword>{t('Forgot Password')}</ForgotPassword>
    </Wrapper>
  )
};

export default Login;
