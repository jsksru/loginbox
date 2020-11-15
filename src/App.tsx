import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SettingsBar from './components/SettingsBar';
import styled from 'styled-components';

import { ThemeContext, LangContext, StateContext } from './collections/contexts';
import { getLangById } from './collections/lang';
import { getThemeById } from './collections/themes';

const App = () => {

  const [currentLang, setCurrentLang] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(0);

  const state = {
    currentLang,
    currentTheme,
    setCurrentLang,
    setCurrentTheme,
  };

  const GlobalStyles = getThemeById(currentTheme).theme.globalStyle;

  const Window = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${getThemeById(currentTheme).theme.COLOR_LIGHT};
    padding: 2rem;
  `;

  return (
    <StateContext.Provider value={state}>
      <ThemeContext.Provider value={getThemeById(currentTheme).theme}>
        <LangContext.Provider value={getLangById(currentLang).lang}>
          <GlobalStyles/>
          <Window>
            <SettingsBar/>
            <LoginForm/>
          </Window>
        </LangContext.Provider>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
