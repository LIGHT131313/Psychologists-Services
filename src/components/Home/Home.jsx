import mainImg from 'img/image.jpg';
import mainImgWbp from 'img/image.webp';
import sprite from 'img/icons.svg';
import { Link } from 'react-router-dom';
import {
  HomeTitle,
  HomeTitleSpan,
  HomeWrap,
  LeftWrap,
  RightWrap,
  HomeText,
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
        <Link to={'/psychologists'}>
          <span>Get started</span>
          <svg>
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </Link>
      </LeftWrap>
      <RightWrap>
        <picture>
          <source srcSet={mainImgWbp} type="image/webp" />
          <source srcSet={mainImg} type="image/jpeg" />
          <img src={mainImg} alt="Girl in glasses" />
        </picture>
      </RightWrap>
    </HomeWrap>
  );
};
