import styled from 'styled-components';

export const AuthWrap = styled.div`
  margin-left: auto;
  margin-right: 0;
`;

export const ButtonLogin = styled.button`
  margin-right: 8px;
  box-sizing: border-box;
  border: 1px solid ${p => p.theme.colors.borderBtn};
  border-radius: 30px;
  width: 124px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.logo};
  transition: 250ms ${p => p.theme.transition};

  &:is(:hover, :focus) {
    background-color: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.homeBackground};
    border: 0;
  }
`;

export const ButtonReg = styled.button`
  width: 171px;
  height: 48px;
  border-radius: 30px;
  background-color: ${p => p.theme.colors.input};
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
