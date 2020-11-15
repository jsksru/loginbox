import React from 'react';
import EnglishLanguage from './lang/english';
import * as theme from '../collections/themes/light';

export const ThemeContext = React.createContext(theme);
export const LangContext = React.createContext(EnglishLanguage);
export const StateContext = React.createContext({
  currentLang: 0,
  currentTheme: 0,
  setCurrentLang(value: number) {},
  setCurrentTheme(value: number) {},
});