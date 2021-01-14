import React,{useEffect} from 'react';
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

const TranslationProvider = ({children}) => {
  const language = useSelector(s => s.language.language);
  const {i18n, t} = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language])
  return <>{children}</>
};

TranslationProvider.propTypes = {
  children: PropTypes.node
};

export default TranslationProvider;
