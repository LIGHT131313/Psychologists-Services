import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const LogInTitle = styled.h2`
  color: ${p => p.theme.colors.logo};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 20px;
`;

export const LogInText = styled.p`
  color: ${p => p.theme.colors.logInText};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 40px;
`;

export const StyledForm = styled(Form)`
  width: 100%;
`;

export const StyledLabel = styled(Field)`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 12px;
  padding: 16px 52px 16px 18px;
  margin-bottom: ${p => p.theme.spacing(4.5)};

  &::placeholder {
    color: ${p => p.theme.colors.logo};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    text-align: left;
  }
  &:is(:hover, :focus) {
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    outline-color: ${p => p.theme.colors.input};
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: ${p => p.theme.colors.red};
  font-style: italic;
  font-size: 12px;
  margin-bottom: ${p => p.theme.spacing(2)};
  margin-left: ${p => p.theme.spacing(4)};
`;

export const ModalBtnLogIn = styled.button`
  background-color: ${p => p.theme.colors.input};
  border-radius: 30px;
  padding: 16px;
  width: 100%;
  height: 52px;
  margin-top: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.homeBackground};
  transition: 250ms ${p => p.theme.transition};

  &:is(:hover, :focus) {
    background-color: ${p => p.theme.colors.hover};
  }
`;
