import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {login} from "../services/UserReducer/actions";

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

const errors = [
  "Incorrect Email or Password"
];

const Error = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.activecold};
`;

const Login = () => {
  const {i18n, t} = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);
  const isLogged = useSelector(s => s.user.token);
  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginState.email, loginState.password, setError));
  };

  useEffect(() => {
    if(isLogged) {
      history.push("/");
    }
  },[isLogged])
  return (
    <Wrapper onSubmit={handleLogin}>
      <Label>{t('Email')}
      <Input type="email" placeholder="myemail@gmail.com" onChange={e => {
        setError(null);
        setLoginState({...loginState, email: e.target.value})
      }} value={loginState.email}/>
      </Label>
      <Label>{t('Password')}
      <Input type="password" placeholder="************" onChange={e => {
        setError(null);
        setLoginState({...loginState, password: e.target.value})
      }} value={loginState.password}/>
      </Label>
      <Icons>
        <Icon src="/facebook.svg" />
        <Icon src="/twitter.svg" />
        <Icon src="/google.svg" />
      </Icons>
      <Submit>{t('Login')}</Submit>
      {error && <Error>{t(errors[error - 1])}</Error>}
      <ForgotPassword>{t('Forgot Password')}</ForgotPassword>
    </Wrapper>
  )
};

export default Login;
