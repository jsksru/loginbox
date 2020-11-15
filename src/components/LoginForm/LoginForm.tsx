import React, { useContext } from 'react';
import styled from 'styled-components';
import { LangContext, ThemeContext } from '../../collections/contexts';

const LoginForm = () => {
  const lang = useContext(LangContext);
  const theme = useContext(ThemeContext);

  const LoginBoxWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const LoginBox = styled.div`
    ${theme.borderBox}
  `;

  const Title = styled.h1`
    ${theme.title}
    margin-bottom: 2rem;
  `;

  const Input = styled.input`
    ${theme.inputTextField}
  `;

  const Button = styled.button`
    ${theme.primaryButton}
  `;

  const LineDiv = styled.div`
    margin-bottom: 1rem;
  `;

  return (
    <LoginBoxWrapper>
      <LoginBox>
        <Title>{lang.formTitle}</Title>
        <LineDiv>
          <Input type="text" placeholder={lang.loginCaption}/>
        </LineDiv>
        <LineDiv>
          <Input type="text" placeholder={lang.passwordCaption}/>
        </LineDiv>
        <LineDiv>
          <label>
            <input type="checkbox"/>
            <span>{lang.saveMeText}</span>
          </label>
        </LineDiv>
        <LineDiv>
          <a href="#">{lang.forgetPasswordText}</a>
        </LineDiv>
        <div>
          <Button>{lang.enterButtonText}</Button>
        </div>
      </LoginBox>
    </LoginBoxWrapper>
  );
};

export default LoginForm;