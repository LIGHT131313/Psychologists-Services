import {
  UserWrap,
  UserBlock,
  UserIcon,
  UserName,
  ButtonLogout,
} from './UserMenu.styled';
import sprite from 'img/icons.svg';

export const UserMenu = () => {
  return (
    <UserWrap>
      <UserBlock>
        <UserIcon>
          <use href={`${sprite}#icon-user`}></use>
        </UserIcon>
      </UserBlock>
      <UserName>Ilona</UserName>
      <ButtonLogout type="button">Log out</ButtonLogout>
    </UserWrap>
  );
};
