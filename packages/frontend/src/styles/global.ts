import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-background: #f0f0f7;
  --color-primary-lighter: #9871f5;
  --color-primary-light: #916bea;
  --color-primary: #8257e5;
  --color-primary-dark: #774dd6;
  --color-primary-darker: #6842c2;
  --color-secundary: #04d361;
  --color-secundary-dark: #04bf58;
  --color-title-in-primary: #ffffff;
  --color-text-in-primary: #d4c2ff;
  --color-text-title: #32264d;
  --color-text-complement: #9c98a6;
  --color-text-base: #6a6180;
  --color-line-in-white: #e6e6f0;
  --color-input-background: #f8f8fc;
  --color-button-text: #ffffff;
  --color-box-base: #ffffff;
  --color-box-footer: #fafafc;
	--color-error: #d53030;
}

html {
	@media (max-width: 1080px) {
		font-size: 93.75%; // 15px
	}
	@media (max-width: 720) {
		font-size: 87.5%; // 14px
	}
}

body {
	background: var(--color-background);
}

body,
input,
button,
textarea {
  font: 500 1rem Poppins;
  color: var(--color-text-base);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  font-family: Archivo, sans-serif;
  color: var(--gray-800);
}

button {
  cursor: pointer;
}
`;
