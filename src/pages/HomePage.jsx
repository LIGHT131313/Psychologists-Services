import { Home } from 'components/Home/Home';
import { Container } from 'components/Container.styled';
import { HomePageWrap } from './HomePage.styled';

export default function HomePage() {
  return (
    <HomePageWrap>
      <Container>
        <Home />
      </Container>
    </HomePageWrap>
  );
}
