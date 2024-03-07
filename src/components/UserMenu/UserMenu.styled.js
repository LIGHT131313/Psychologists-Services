import styled from 'styled-components';

export const UserWrap = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: right;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const UserBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 14px;
  background: ${p => p.theme.colors.input};
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const UserIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const UserName = styled.p`
  color: ${p => p.theme.colors.logo};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
`;

export const ButtonLogout = styled.button`
  margin-left: 12px;
  box-sizing: border-box;
  border: 1px solid ${p => p.theme.colors.borderBtn};
  border-radius: 30px;
  width: 135px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.logo};
  transition: 250ms ${p => p.theme.transition};

  @media screen and (min-width: 768px) {
    margin-left: 28px;
  }

  &:is(:hover, :focus) {
    background-color: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.homeBackground};
    border: 0;
  }
`;
