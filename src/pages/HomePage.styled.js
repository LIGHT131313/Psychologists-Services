import styled from 'styled-components';
import backgroundGradient from 'img/background.svg';

export const HomePageWrap = styled.div`
  background-color: ${p => p.theme.colors.homeBackground};
  background-image: url('${backgroundGradient}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
