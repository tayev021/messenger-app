import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  // color-zinc
  --color-grey-0: #ffffff;
  --color-grey-50: #fafafa;
  --color-grey-50-04:rgba(250, 250, 250, 0.4);
  --color-grey-100: #f4f4f5;
  --color-grey-200: #e4e4e7;
  --color-grey-200-08:rgba(228, 228, 231, 0.8);
  --color-grey-300: #d4d4d8;
  --color-grey-400: #a1a1aa;
  --color-grey-500: #71717a;
  --color-grey-600: #52525b;
  --color-grey-700: #3f3f46;
  --color-grey-700-06: rgba(63, 63, 70, 0.6);
  --color-grey-800: #27272a;
  --color-grey-900: #18181b;
  --color-grey-950: #09090b;
  --color-grey-999: #000000;

  // color-sky
  --color-sky-50: #f0f9ff;
  --color-sky-100: #e0f2fe;
  --color-sky-100-075: rgba(224, 242, 254, 0.75);
  --color-sky-200: #bae6fd;
  --color-sky-300: #7dd3fc;
  --color-sky-400: #38bdf8;
  --color-sky-500: #0ea5e9;
  --color-sky-600: #0284c7;
  --color-sky-700: #0369a1;
  --color-sky-800: #075985;
  --color-sky-900: #0c4a6e;
  --color-sky-950: #082f49;
  
  // color-green
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;

  // color-red
  --color-red-100: #fee2e2;
  --color-red-200: #fecaca;
  --color-red-300: #fca5a5;
  --color-red-400: #f87171;
  --color-red-500: #ef4444;
  --color-red-600: #dc2626; 
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  --color-red-900: #7f1d1d;

  // shadows
  --box-shadow-smallest: 1px 1px 2px rgba(0, 0, 0, 0.2);
  --box-shadow-small: 2px 2px 4px rgba(0, 0, 0, 0.3);
  --box-shadow-medium: 2px 4px 6px rgba(0, 0, 0, 0.3);

  --box-shadow-top-smallest: 0 -1px 3px rgba(0, 0, 0, 0.3);
  --box-shadow-top-small: 0 -2px 4px rgba(0, 0, 0, 0.3);

  --box-shadow-bottom-smallest: 0 1px 3px rgba(0, 0, 0, 0.3);
  --box-shadow-bottom-small: 0 2px 4px rgba(0, 0, 0, 0.3);

  --box-shadow-right-large: 4px 0 6px rgba(0, 0, 0, 0.3);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-grey-800);
  background-color: var(--color-grey-50);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  color: var(--color-grey-500);
  background-color: var(--color-grey-200);
}

input:focus,
textarea:focus,
select:focus,
button:focus,
a:focus {
  outline: 2px solid var(--color-sky-400);
  outline-offset: 2px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;
