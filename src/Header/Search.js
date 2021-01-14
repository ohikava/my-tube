import React from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  background: #fff;
  padding: 0 10px;

  @media(min-width: 760px) {
    width: 45%;
  }
`;
const Input = styled.input`
  height: 2.2rem;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.3rem;
  //outline-color: ${props => props.theme.activecold};
  width: 85%;
  @media(min-width: 375px) {
    width: 86%;
  }
  @media(min-width: 425px) {
    width: 90%;
  }
  @media(min-width: 760px) {
    width: 93%;
  }
`;
const Button = styled.img`
  width: 1.2rem;
`;

const Search = () => {
  const {i18n, t} = useTranslation();
  return (
    <Wrapper>
      <Input placeholder={t('Type')} />
      <Button src="/loupe.svg"/>
    </Wrapper>
  )
};

export default Search;
