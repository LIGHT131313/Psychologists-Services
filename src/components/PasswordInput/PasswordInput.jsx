import { useState } from 'react';
import sprite from 'img/icons.svg';
import {
  StyledLabelPass,
  ShowPasswordButton,
  ShowPasswordSvg,
  PasswordWrap,
} from './PasswordInput.styled';

const eyeIcon = (
  <ShowPasswordSvg>
    <use href={`${sprite}#icon-eye`}></use>
  </ShowPasswordSvg>
);

const eyeIconOff = (
  <ShowPasswordSvg>
    <use href={`${sprite}#icon-eye-off`}></use>
  </ShowPasswordSvg>
);

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordWrap>
      <StyledLabelPass
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
      />

      <ShowPasswordButton onClick={togglePasswordVisibility} type="button">
        {showPassword ? eyeIconOff : eyeIcon}
      </ShowPasswordButton>
    </PasswordWrap>
  );
};
