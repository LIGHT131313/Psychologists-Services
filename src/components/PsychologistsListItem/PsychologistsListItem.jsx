import {
  AvatarWrap,
  AvatarImg,
  AvatarDot,
  DescriptionText,
  DescriptionWrap,
  HeadDescriptionWrap,
  HeadText,
  PsychologistsWrap,
  PsychologistName,
  RatingPriceBlock,
  RatingPriceText,
  RatingPriceTextSpan,
  ReadMoreButton,
  SkillsBlock,
  SkillsBlockText,
  SkillsSpan,
  LabelCheck,
  InputCheck,
  FavoriteBorderIconStyle,
  FavoriteIconStyle,
  SvgStar,
} from './/PsychologistsListItem.styled';
import sprite from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorites,
  // selectIsLoading
} from '../../redux/data/selectors';
import { useEffect, useState } from 'react';
import { addFavorite, removeFavorite } from '../../redux/data/favoritesSlice';

export const PsychologistsListItem = ({ item }) => {
  const {
    name,
    avatar_url,
    experience,
    // reviews,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
  } = item;

  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavorites);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const isItemInFavorites = favorites.some(
      favorite => favorite.name === name
    );
    setIsFavorited(isItemInFavorites);
  }, [favorites, name]);

  const handleCheckboxChange = () => {
    if (isFavorited) {
      dispatch(removeFavorite({ item }));
    } else {
      dispatch(addFavorite({ item }));
    }
  };

  return (
    <PsychologistsWrap>
      <AvatarWrap>
        <AvatarImg src={avatar_url} width="96px" height="96px" alt={name} />
        <AvatarDot></AvatarDot>
      </AvatarWrap>
      <DescriptionWrap>
        <HeadDescriptionWrap>
          <HeadText>Psychologist</HeadText>
          <RatingPriceBlock>
            <SvgStar>
              <use href={`${sprite}#icon-star`}></use>
            </SvgStar>
            <RatingPriceText>Rating: {rating}</RatingPriceText>
            <RatingPriceText>
              Price / 1 hour:
              <RatingPriceTextSpan>{price_per_hour}$</RatingPriceTextSpan>
            </RatingPriceText>
          </RatingPriceBlock>
          <LabelCheck>
            <InputCheck
              type="checkbox"
              aria-label="isFavorite"
              checked={isFavorited}
              onChange={() => handleCheckboxChange()}
            ></InputCheck>
            {isFavorited ? (
              <FavoriteIconStyle>
                <use href={`${sprite}#icon-heart`}></use>
              </FavoriteIconStyle>
            ) : (
              <FavoriteBorderIconStyle>
                <use href={`${sprite}#icon-heart`}></use>
              </FavoriteBorderIconStyle>
            )}
          </LabelCheck>
        </HeadDescriptionWrap>
        <PsychologistName>{name}</PsychologistName>
        <SkillsBlock>
          <SkillsBlockText>
            <SkillsSpan>Experience:</SkillsSpan>
            {experience}
          </SkillsBlockText>
          <SkillsBlockText>
            <SkillsSpan>License:</SkillsSpan>
            {license}
          </SkillsBlockText>
          <SkillsBlockText>
            <SkillsSpan>Specialization:</SkillsSpan>
            {specialization}
          </SkillsBlockText>
          <SkillsBlockText>
            <SkillsSpan>Initial_consultation:</SkillsSpan>
            {initial_consultation}
          </SkillsBlockText>
        </SkillsBlock>
        <DescriptionText>{about}</DescriptionText>
        <ReadMoreButton type="button">Read more</ReadMoreButton>
      </DescriptionWrap>
    </PsychologistsWrap>
  );
};
