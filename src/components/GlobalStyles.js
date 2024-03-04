import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import interBold from '../fonts/Inter-Bold.ttf';
import interMedium from '../fonts/Inter-Medium.ttf';
import interRegular from '../fonts/Inter-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

img {
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
 font-family: "InterBold";
 src: local("InterBold"),
  url(${interBold}) format("truetype");
 font-weight: bold;
}

@font-face {
 font-family: "InterMedium";
 src: local("InterMedium"),
  url(${interMedium}) format("truetype");
 font-weight: medium;
}

@font-face {
 font-family: "InterRegular";
 src: local("InterRegular"),
  url(${interRegular}) format("truetype");
 font-weight: regular;
}
`;
