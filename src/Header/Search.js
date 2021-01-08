import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  background: #fff;

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
  padding-left: 5px;
  //outline-color: ${props => props.theme.activecold};
  width: 82%;
  @media(min-width: 760px) {
    width: 93%;
  }
`;
const Button = styled.img`
  width: 1.2rem;
`;

const Search = () => {
  return (
    <Wrapper>
      <Input />
      <Button src="loupe.svg"/>
    </Wrapper>
  )
};

export default Search;
