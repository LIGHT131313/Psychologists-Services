import styled from 'styled-components';

export const HomeWrap = styled.div`
  display: flex;
  padding-bottom: 100px;
`;

export const LeftWrap = styled.div`
  max-width: 595px;
  margin-right: 125px;
  padding-top: 126px;
`;

export const RightWrap = styled.div`
  /* max-width: 595px; */
  padding-top: 78px;
`;

export const HomeTitle = styled.h1`
  font-size: 80px;
  font-weight: 600;
  line-height: 1.025;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${p => p.theme.colors.logo};
`;

export const HomeTitleSpan = styled.span`
  font-style: italic;
  color: ${p => p.theme.colors.input};
`;

export const HomeText = styled.p`
  max-width: 510px;
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.logo};
`;
