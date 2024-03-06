import mainImg from 'img/image.jpg';
import mainImgWbp from 'img/image.webp';
import sprite from 'img/icons.svg';

import {
  HomeTitle,
  HomeTitleSpan,
  HomeWrap,
  LeftWrap,
  RightWrap,
  HomeText,
  HomeBtnIcon,
  HomeBtn,
  HomeBtnSpan,
  HomeImg,
  CheckBlock,
  CheckIconWrap,
  CheckIcon,
  CheckWords,
  CheckNumb,
  QuestionBlock,
  QuestionIcon,
  UsersBlock,
  UsersIcon,
  HomeBtnWrap,
} from './Home.styled';

export const Home = () => {
  return (
    <HomeWrap>
      <LeftWrap>
        <HomeTitle>
          The road to the <HomeTitleSpan>depths</HomeTitleSpan> of the human
          soul
        </HomeTitle>
        <HomeText>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </HomeText>
        <HomeBtn to={'/psychologists'}>
          <HomeBtnWrap>
            <HomeBtnSpan>Get started</HomeBtnSpan>
            <HomeBtnIcon>
              <use href={`${sprite}#icon-arrow`}></use>
            </HomeBtnIcon>
          </HomeBtnWrap>
        </HomeBtn>
      </LeftWrap>
      <RightWrap>
        <picture>
          <source srcSet={mainImgWbp} type="image/webp" />
          <source srcSet={mainImg} type="image/jpeg" />
          <HomeImg
            width="464px"
            height="526px"
            src={mainImg}
            alt="Girl in glasses"
          />
        </picture>
        <QuestionBlock>
          <QuestionIcon>
            <use href={`${sprite}#icon-question`}></use>
          </QuestionIcon>
        </QuestionBlock>
        <UsersBlock>
          <UsersIcon>
            <use href={`${sprite}#icon-users`}></use>
          </UsersIcon>
        </UsersBlock>
        <CheckBlock>
          <CheckIconWrap>
            <CheckIcon>
              <use href={`${sprite}#icon-check`}></use>
            </CheckIcon>
          </CheckIconWrap>
          <div>
            <CheckWords>Experienced psychologists</CheckWords>
            <CheckNumb>15,000</CheckNumb>
          </div>
        </CheckBlock>
      </RightWrap>
    </HomeWrap>
  );
};
