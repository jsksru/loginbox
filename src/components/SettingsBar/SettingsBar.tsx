import React, { useContext } from 'react';
import { LangContext } from '../../collections/contexts';
import styled from 'styled-components';

const StyledBar = styled.div`
  justify-self: flex-start;
  align-self: flex-end;
  display: flex;
`;

const SettingsBar = () => {
  const lang = useContext(LangContext);

  return (
    <StyledBar>
      <div>
        <span>{lang.switchLangCaption}: </span>
        <select>
          <option value="1">Русский</option>
          <option value="2">Английский</option>
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