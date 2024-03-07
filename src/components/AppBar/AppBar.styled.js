import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid ${p => p.theme.colors.border};
  background-color: ${p => p.theme.colors.homeBackground};
`;

export const HeaderWrap = styled.div`
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled(Link)`
  margin-right: 8px;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.input};
  line-height: 1.2;
  transition: 250ms ${p => p.theme.transition};

  &:is(:hover, :focus) {
    transform: translate(10%);
  }

  @media screen and (min-width: 768px) {
    margin-right: 12px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 130px;
  }
`;

export const LogoDotSpan = styled.span`
  font-weight: 500;
`;

export const LogoSpan = styled.span`
  font-weight: 600;
  color: ${p => p.theme.colors.logo};
`;
