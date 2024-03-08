import { Home } from 'components/Home/Home';
import { Container } from 'components/Container.styled';
import { HomePageWrap } from './HomePage.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function HomePage() {
  return (
    <HomePageWrap>
      <Container>
        <LoginForm />
        <Home />
      </Container>
    </HomePageWrap>
  );
}
