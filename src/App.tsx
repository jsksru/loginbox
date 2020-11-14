import React from 'react';
import GlobalStyles from './collections/styles/global';
import LoginForm from './components/LoginForm';
import SettingsBar from './components/SettingsBar';
import styled from 'styled-components';

import { ThemeContext, LangContext } from './collections/contexts';
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

  return (
    <ThemeContext.Provider value={1}>
      <LangContext.Provider value={getLangById(0).lang}>
        <GlobalStyles/>
        <Window>
          <SettingsBar/>
          <LoginForm/>
        </Window>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
