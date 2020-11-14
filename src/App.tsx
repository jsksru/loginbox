import React, { useState } from 'react';
import GlobalStyles from './collections/styles/global';
import LoginForm from './components/LoginForm';
import SettingsBar from './components/SettingsBar';
import styled from 'styled-components';

import { ThemeContext, LangContext, StateContext } from './collections/contexts';
import { getLangById } from './collections/lang';

const Window = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 245, 250);
  padding: 2rem;
`;

const App = () => {

  const [currentLang, setCurrentLang] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(0);

  const state = {
    currentLang,
    currentTheme,
    setCurrentLang,
    setCurrentTheme,
  };

  return (
    <StateContext.Provider value={state}>
      <ThemeContext.Provider value={currentTheme}>
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
