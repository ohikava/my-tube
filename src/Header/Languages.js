import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Item from "./Item";
import ModalWindow from "../utils/ModalWindow";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../services/LanguageReducer/actions";
import {LANGUAGES} from "../services/LanguageReducer/actionsTypes";


const CustomItem= styled(Item)`
  background: ${props => props.active && props.theme.maincolor};
  padding: 7px 15px;
`;

const Languages = ({open, close}) => {
  const dispatch = useDispatch();
  const language = useSelector(s => s.language.language);
  const {i18n, t} = useTranslation();
  return (
    <ModalWindow open={open} close={close} title="Language">
      <CustomItem img="/russia.svg" active={language === LANGUAGES.RUS} cb={() => dispatch(changeLanguage(LANGUAGES.RUS))}>Русский</CustomItem>
      <CustomItem img="/english.svg" active={language === LANGUAGES.ENG} cb={() => dispatch(changeLanguage(LANGUAGES.ENG))}>English</CustomItem>
    </ModalWindow>
  );
};

Languages.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func
};

export default Languages;
