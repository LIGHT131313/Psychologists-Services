import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrap = styled.div`
  padding-top: 78px;
  padding-bottom: 100px;

  @media screen and (min-width: 1439px) {
    display: flex;
  }
`;

export const LeftWrap = styled.div`
  max-width: 595px;
  margin-right: 0;
  margin-top: 0;

  @media screen and (min-width: 1440px) {
    margin-right: 124px;
    margin-top: 48px;
  }
`;

export const RightWrap = styled.div`
  position: relative;

  @media screen and (max-width: 1439px) {
    margin-top: 40px;
  }
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

export const HomeBtn = styled(Link)`
  display: block;
  width: 236px;
  height: 60px;
  border-radius: 30px;
  padding: 18px 0 18px 0;
  background-color: ${p => p.theme.colors.input};
  transition: 250ms ${p => p.theme.transition};

  &:is(:hover, :focus) {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const HomeBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeBtnSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.homeBackground};
  margin-right: 18px;
`;

export const HomeBtnIcon = styled.svg`
  width: 15px;
  height: 17px;
`;

export const HomeImg = styled.img`
  border-radius: 10px;
`;

export const QuestionBlock = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 185px;
  left: -35px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  background-color: #54be96;
  transform: rotate(-15deg);

  @media screen and (max-width: 1439px) {
    left: -12px;
  }
`;
export const QuestionIcon = styled.svg`
  width: 10px;
  height: 17px;
  transform: rotate(15deg);
`;

export const UsersBlock = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  transform: rotate(15deg);
  top: 38px;
  right: -18px;
  border-radius: 10px;
  background: #fbc75e;

  @media screen and (min-width: 768px) {
    left: 454px;
  }
`;
export const UsersIcon = styled.svg`
  width: 25px;
  height: 25px;
  transform: rotate(-15deg);
`;

export const CheckBlock = styled.div`
  display: flex;
  position: absolute;
  padding: 32px;
  left: -102px;
  bottom: 74px;
  width: 312px;
  height: 118px;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.input};

  @media screen and (max-width: 1439px) {
    left: -20px;
  }
`;

export const CheckIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background-color: ${p => p.theme.colors.homeBackground};
`;
export const CheckIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${p => p.theme.colors.input};
`;
export const CheckWords = styled.p`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  color: ${p => p.theme.colors.homeBackground};
  opacity: 0.5;
`;

export const CheckNumb = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: ${p => p.theme.colors.homeBackground};
`;
