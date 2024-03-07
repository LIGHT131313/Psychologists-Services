import {
  Header,
  Logo,
  HeaderWrap,
  LogoDotSpan,
  LogoSpan,
} from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'components/Container.styled';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <HeaderWrap>
          <Logo to={'/'}>
            psychologists<LogoDotSpan>.</LogoDotSpan>
            <LogoSpan>services</LogoSpan>
          </Logo>
          <Navigation />
          <AuthNav />
          {/* <UserMenu /> */}
        </HeaderWrap>
      </Container>
    </Header>
  );
};
