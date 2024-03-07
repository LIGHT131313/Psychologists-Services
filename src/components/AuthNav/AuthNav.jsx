import { ButtonLogin, ButtonReg, AuthWrap } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthWrap>
      <ButtonLogin type="button">Log In</ButtonLogin>
      <ButtonReg type="button">Registration</ButtonReg>
    </AuthWrap>
  );
};
