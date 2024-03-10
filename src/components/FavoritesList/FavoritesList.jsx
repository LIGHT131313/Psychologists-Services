import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/data/selectors';
import { ListMes } from './FavoritesList.styled';
import { PsychologistsListItem } from '../PsychologistsListItem/PsychologistsListItem';

export const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((item, idx) => (
            <PsychologistsListItem key={idx} item={item} />
          ))}
        </ul>
      ) : (
        <ListMes>Favorites Empty</ListMes>
      )}
    </>
  );
};
