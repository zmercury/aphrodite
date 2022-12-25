import { createGlobalStyle } from 'styled-components';

//background Images Import
import {partlyCoudy} from "../images";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image: url(${partlyCoudy});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
}
`;

export default GlobalStyle;