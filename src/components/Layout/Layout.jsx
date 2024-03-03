import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { Container } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyles';

export const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
      <GlobalStyle />
    </>
  );
};
