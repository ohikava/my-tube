import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {register, clear} from '../services/UserReducer/actions';
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
  width: 50%;
  padding: 10px 0;
  border: none;
  margin: auto;
  cursor: pointer;
  background:${props => props.theme.maincolor};
  font-size: 1.2rem;
`;

const errors = [
  'Email already have been used',
  'Name already have been used',
  'Password 1 is not equal password 2'
];

const Error = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.activecold};
`;
const Register = ({close}) => {
  const {i18n, t} = useTranslation();
  const [registerState, setRegisterState] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const dispatch = useDispatch();
  const registrationError = useSelector(s => s.user.registrationError);

  useEffect(() => {
    console.log(registrationError);
    if (registrationError === 'success') {
      close && close();
      setRegisterState({
        name: '',
        email: '',
        password: '',
        password2: ''
      });
      dispatch(clear());
    }
  }, [registrationError]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(register(registerState));
  };

  return (
    <Wrapper onSubmit={submit}>
      <Label>{t('Nickname')}
      <Input type="text" placeholder="Wodey" onChange={e => {
        dispatch(clear());
        setRegisterState({...registerState, name: e.target.value})
      }} value={registerState.name} required/>
      </Label>
      <Label>{t('Email')}
      <Input type="email" placeholder="myemail@gmail.com" onChange={e => {
        dispatch(clear());
        setRegisterState({...registerState, email: e.target.value})
      }} value={registerState.email} required/>
      </Label>
      <Label>{t('Password')}
      <Input type="password" placeholder="************" onChange={e => {
        dispatch(clear());
        setRegisterState({...registerState, password: e.target.value})
      }} value={registerState.password} required/>
      </Label>
      <Label>{t('Repeat Password')}
      <Input type="password" placeholder="************" onChange={e => {
        dispatch(clear());
        setRegisterState({...registerState, password2: e.target.value})
      }} value={registerState.password2} required/>
      </Label>
      <Icons>
        <Icon src="/facebook.svg" />
        <Icon src="/twitter.svg" />
        <Icon src="/google.svg" />
      </Icons>
      <Submit>{t('Register')}</Submit>
      {registrationError && registrationError !== 'success' && (<Error>{t(errors[registrationError-1])}</Error>)}
    </Wrapper>
  )
};

Register.propTypes = {
  close: PropTypes.func.isRequired
}
export default Register;
