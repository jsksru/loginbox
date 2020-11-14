import React, { useContext } from 'react';
import styled from 'styled-components';
import { LangContext } from '../../collections/contexts';

const LoginBoxWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 1px 0px #ddd;
`;

const LoginForm = () => {
  const lang = useContext(LangContext);
  return (
    <LoginBoxWrapper>
      <LoginBox>
        <div>{lang.formTitle}</div>
        <div>
          <input type="text" placeholder={lang.loginCaption}/>
        </div>
        <div>
          <input type="text" placeholder={lang.passwordCaption}/>
        </div>
        <div>
          <label>
            <input type="checkbox"/>
            <span>{lang.saveMeText}</span>
          </label>
        </div>
        <div>
          <a href="#">{lang.forgetPasswordText}</a>
        </div>
        <div>
          <button>{lang.enterButtonText}</button>
        </div>
      </LoginBox>
    </LoginBoxWrapper>
  );
};

export default LoginForm;