import styled from 'styled-components';
import { StyledLabel } from 'components/LoginModal/LoginModal.styled';

export const PasswordWrap = styled.div`
  position: relative;
`;

export const StyledLabelPass = styled(StyledLabel)`
  margin-bottom: 0;
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  background: none;
  border: none;
`;

export const ShowPasswordSvg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${p => p.theme.colors.logo};
  fill: transparent;
`;
