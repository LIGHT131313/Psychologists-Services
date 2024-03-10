import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import interBold from '../fonts/Inter-Bold.ttf';
import interSemiBold from '../fonts/Inter-SemiBold.ttf';
import interMedium from '../fonts/Inter-Medium.ttf';
import interRegular from '../fonts/Inter-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${p => p.theme.colors.psPage};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

img, picture {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

li {
  list-style: none;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

a {
  text-decoration: none; 
  cursor: pointer;
}

@font-face {
 font-family: "Inter";
 src: url(${interBold}) format("truetype");
font-weight: 700;
}

@font-face {
 font-family: "Inter";
 src: url(${interSemiBold}) format("truetype");
 font-weight: 600;
}

@font-face {
 font-family: "Inter";
 src: url(${interMedium}) format("truetype");
 font-weight: 500;
}

@font-face {
 font-family: "Inter";
 src: url(${interRegular}) format("truetype");
 font-weight: 400;
}
`;
