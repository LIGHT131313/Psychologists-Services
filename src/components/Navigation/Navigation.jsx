import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/psychologists">Psychologists</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};
