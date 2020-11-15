import React, { useContext } from 'react';
import { LangContext, StateContext } from '../../collections/contexts';
import { languages } from '../../collections/lang';
import { themes } from '../../collections/themes';
import styled from 'styled-components';

const StyledBar = styled.div`
  justify-self: flex-start;
  align-self: flex-end;
  display: flex;
`;

const SettingsBar = () => {
  const state = useContext(StateContext);
  const lang = useContext(LangContext);

  const languageHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    state.setCurrentLang(parseInt(event.target.value));
  };
  const themeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    state.setCurrentTheme(parseInt(event.target.value));
  };

  return (
    <StyledBar>
      <div>
        <span>{lang.switchLangCaption}: </span>
        <select onChange={languageHandler}>
          {languages.map(item => {
            if (item.id === state.currentLang) return <option value={item.id} selected>{item.name}</option>;
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>
      </div>
      <div>
        <span>{lang.switchThemeCaption}: </span>
        <select onChange={themeHandler}>
          {themes.map(item => {
            if (item.id === state.currentTheme) return <option value={item.id} selected>{item.name}</option>;
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>
      </div>
    </StyledBar>
  );
};

export default SettingsBar;