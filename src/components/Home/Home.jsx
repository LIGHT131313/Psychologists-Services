import { Container } from 'components/Container.styled';
import mainImg from 'img/image.jpg';
import mainImgWbp from 'img/image.webp';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container>
      <h1>The road to the depths of the human soul</h1>
      <p>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </p>
      <Link to={'/psychologists'}>
        <span>Get started</span>
      </Link>
      <picture>
        <source srcset={mainImgWbp} type="image/webp" />
        <source srcset={mainImg} type="image/jpeg" />
        <img src={mainImg} alt="Girl in glasses" />
      </picture>
    </Container>
  );
};
