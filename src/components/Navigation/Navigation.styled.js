import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const Link = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.logo};
  line-height: 1.25;
  display: inline-block;
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background-color: ${p => p.theme.colors.input};
    border-radius: 50%;
    transition: 250ms ${p => p.theme.transition};
  }

  &:is(:hover, :focus, :active) {
    &::after {
      opacity: 1;
    }
  }
`;
