import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/psychologists">Psychologists</Link>
      <Link to="/favorites">Favorites</Link>
    </Nav>
  );
};
