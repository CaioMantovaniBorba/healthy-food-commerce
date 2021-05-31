import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

:root {
        --primary-color: #badc58;
        --secondary-color: #1d164d;
        --tertiary-color: #9e9baf;
    }

*:focus {
  outline: 0;
}

html,
body,
#root {
  height: 100%;
  background-color: #fff;
}

a {
  text-decoration: none;
}

a, p, span {
  font-family: 'Mulish', sans-serif;
}

h1 {
  font-family: 'Montserrat', sans-serif;
}

ul {
  list-style: none;
}

button, a {
  cursor: pointer;
}
`;
