import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Item from "./Item";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../services/LanguageReducer/actions";
import {LANGUAGES} from "../services/LanguageReducer/actionsTypes";

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
`;

const CustomItem= styled(Item)`
  background: ${props => props.active && props.theme.maincolor};
  padding: 7px 15px;
`;

const Languages = ({open, close}) => {
  const dispatch = useDispatch();
  const language = useSelector(s => s.language.language);
  const {i18n, t} = useTranslation();
  return (
    <Wrapper open={open}>
      <Row>
        <Title>
          {t('Language')}
        </Title>
        <Close src="close.svg" onClick={close}/>
      </Row>
      <CustomItem img="russia.svg" active={language === LANGUAGES.RUS} cb={() => dispatch(changeLanguage(LANGUAGES.RUS))}>Русский</CustomItem>
      <CustomItem img="english.svg" active={language === LANGUAGES.ENG} cb={() => dispatch(changeLanguage(LANGUAGES.ENG))}>English</CustomItem>
    </Wrapper>
  );
};

Languages.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func
};

export default Languages;
