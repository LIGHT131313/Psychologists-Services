import styled from 'styled-components';

export const PsychologistsWrap = styled.li`
  border-radius: 24px;
  display: flex;
  padding: 24px;
  margin: 32px 0;
  background-color: ${p => p.theme.colors.homeBackground};
`;

export const AvatarWrap = styled.div`
  width: 133px;
  height: 120px;
  border-radius: 30px;
  margin-right: 24px;
  padding: 12px;
  border: 2px solid ${p => p.theme.colors.avatarBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const AvatarImg = styled.img`
  border-radius: 15px;
  height: 100%;
  width: 100%;
`;

export const AvatarDot = styled.img`
  width: 14px;
  height: 14px;
  background-color: ${p => p.theme.colors.price};
  border: 2px solid ${p => p.theme.colors.homeBackground};
  position: absolute;
  top: 9px;
  right: 14px;
  border-radius: 50%;
`;

export const DescriptionWrap = styled.div`
  width: 100%;
`;

export const HeadDescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
`;

export const HeadText = styled.p`
  color: ${p => p.theme.colors.category};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0;
  text-align: left;
  margin-right: auto;
`;

export const RatingPriceBlock = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-right: 28px;
`;

export const RatingPriceText = styled.p`
  color: ${p => p.theme.colors.logo};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0;
  text-align: left;

  &::after {
    content: '';
    width: 0px;
    height: 16px;
    border: 1px solid ${p => p.theme.colors.borderBtn};
    margin-left: 16px;
    margin-right: 16px;
  }

  &:last-child::after {
    content: none;
  }
`;

export const RatingPriceTextSpan = styled.span`
  margin-left: 4px;
  color: ${p => p.theme.colors.price};
`;

export const SvgStar = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const LabelCheck = styled.label`
  position: relative;
  display: inline-block;
`;

export const InputCheck = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const FavoriteIconStyle = styled.svg`
  fill: ${p => p.theme.colors.input};
  cursor: pointer;
  width: 26px;
  height: 26px;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const FavoriteBorderIconStyle = styled.svg`
  fill: transparent;
  cursor: pointer;
  width: 26px;
  height: 26px;
  stroke: ${p => p.theme.colors.logo};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const PsychologistName = styled.p`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  margin-bottom: 24px;
`;

export const SkillsBlock = styled.div`
  display: flex;
  gap: 8px 4px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const SkillsBlockText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 16px;
  border-radius: 24px;
  background-color: ${p => p.theme.colors.psPage};
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
`;
export const SkillsSpan = styled.span`
  color: ${p => p.theme.colors.category};
  margin-right: 4px;
`;
export const DescriptionText = styled.p`
  color: ${p => p.theme.colors.logInText};
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  margin-bottom: 14px;
`;
export const ReadMoreButton = styled.button`
  color: ${p => p.theme.colors.logo};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
`;
