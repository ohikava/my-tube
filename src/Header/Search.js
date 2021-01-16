import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";
import {searchVideoShort} from "../services/VideoReducer/actions";
import {useSelector, useDispatch} from 'react-redux';
import Short from './Short';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  background: #fff;
  padding: 0 10px;
  position: relative;
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

const Shorts = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;
const Search = ({close}) => {
  const {i18n, t} = useTranslation();
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const short = useSelector(s => s.video.short);
  useEffect(() => {
    dispatch(searchVideoShort(search));
  }, [search, dispatch]);

  return (
    <Wrapper>
      <Input placeholder={t('Type')} onChange={(e) => setSearch(e.target.value)} value={search}/>
      <Button src="/loupe.svg" />
      <Shorts>
        {
          short && short.map(i => <Short {...i} cb={() => {
            setSearch('');
            close && close();
          }}/>)
        }
      </Shorts>
    </Wrapper>
  )
};

Search.propTypes = {
  close: PropTypes.func
}
export default Search;
