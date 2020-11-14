import React, { useContext } from 'react';
import { LangContext, StateContext } from '../../collections/contexts';
import { languages } from '../../collections/lang';
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

  return (
    <StyledBar>
      <div>
        <span>{lang.switchLangCaption}: </span>
        <select onChange={languageHandler}>
          {languages.map(item => <option value={item.id}>{item.name}</option>)}
        </select>
      </div>
      <div>
        <span>{lang.switchThemeCaption}: </span>
        <select>
          <option value="1">Темная</option>
          <option value="2">Светлая</option>
        </select>
      </div>
    </StyledBar>
  );
};

export default SettingsBar;