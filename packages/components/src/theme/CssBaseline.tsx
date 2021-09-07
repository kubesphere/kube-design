import React from 'react';
import { createGlobalStyle } from 'styled-components';

const CssBaseline = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${(p) => p.theme.palette.foreground};
  }
  html {
    font-size: ${({ theme }) => theme.font.fontSizeBase};
    --kubed-icons-background: ${(p) => p.theme.palette.background};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    min-height: 100%;
    position: relative;
    overflow-x: hidden;
    font-family: ${(p) => p.theme.font.sans};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    //text-rendering: geometricPrecision;
    -webkit-tap-highlight-color: transparent;
  }

  p,
  small {
    font-weight: 400;
    color: inherit;
    letter-spacing: -0.005625rem;
    font-family: ${(p) => p.theme.font.sans};
  }

  p {
    margin: 1rem 0;
    font-size: 1em;
    line-height: 1.625em;
  }
  small {
    margin: 0;
    line-height: 1.5;
    font-size: 0.875rem;
  }
  b {
    font-weight: 600;
  }
  span {
    font-size: inherit;
    color: inherit;
    font-weight: inherit;
  }
  img {
    max-width: 100%;
  }

  a {
    cursor: pointer;
    font-size: inherit;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-box-align: center;
    align-items: center;
    color: ${(p) => p.theme.palette.link};
    text-decoration: ${(p) => p.theme.expressiveness.linkStyle};
  }
  a:hover {
    text-decoration: ${(p) => p.theme.expressiveness.linkHoverStyle};
  }
  ul,
  ol {
    padding: 0;
    list-style-type: none;
    margin: ${(p) => p.theme.layout.gapHalf} ${(p) => p.theme.layout.gapHalf} ${(props) =>
  props.theme.layout.gapHalf}
      ${(p) => p.theme.layout.gap};
    color: ${(p) => p.theme.palette.foreground};
  }
  ol {
    list-style-type: decimal;
  }
  li {
    margin-bottom: 0.625rem;
    font-size: 1em;
    line-height: 1.625em;
  }
  ul li:before {
    content: '–';
    display: inline-block;
    color: ${(p) => p.theme.palette.accents_4};
    position: absolute;
    margin-left: -15px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    margin: 0 0 0.625rem 0;
  }
  h1 {
    font-size: 3rem;
    letter-spacing: -0.066875rem;
    line-height: 1.5;
    font-weight: 700;
  }
  h2 {
    font-size: 2.25rem;
    letter-spacing: -0.020625rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.5rem;
    letter-spacing: -0.029375rem;
    font-weight: 600;
  }
  h4 {
    font-size: 1.25rem;
    letter-spacing: -0.020625rem;
    font-weight: 600;
  }
  h5 {
    font-size: 1rem;
    letter-spacing: -0.01125rem;
    font-weight: 600;
  }
  h6 {
    font-size: 0.875rem;
    letter-spacing: -0.005625rem;
    font-weight: 600;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
  }
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }

  code {
    color: ${(p) => p.theme.palette.code};
    font-family: ${(p) => p.theme.font.mono};
    font-size: 0.9em;
    white-space: pre-wrap;
  }

  code:before,
  code:after {
    content: '\`';
  }

  pre {
    border: 1px solid ${(p) => p.theme.palette.accents_2};
    border-radius: ${(p) => p.theme.layout.radius.sm};
    padding: calc(${(p) => p.theme.layout.gap} * 0.75) ${(p) => p.theme.layout.gap};
    margin: ${(p) => p.theme.layout.gap} 0;
    font-family: ${(p) => p.theme.font.mono};
    white-space: pre;
    overflow: auto;
    line-height: 1.5;
    text-align: left;
    font-size: 0.875rem;
    -webkit-overflow-scrolling: touch;
  }

  pre code {
    color: ${(p) => p.theme.palette.foreground};
    font-size: 0.8125rem;
    line-height: 1.25rem;
    white-space: pre;
  }

  pre code:before,
  pre code:after {
    display: none;
  }
  pre :global(p) {
    margin: 0;
  }
  pre::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
  }
  hr {
    border-color: ${(p) => p.theme.palette.accents_2};
  }
  details {
    background-color: ${(p) => p.theme.palette.accents_1};
    border: none;
  }

  details:focus,
  details:hover,
  details:active {
    outline: none;
  }

  summary {
    cursor: pointer;
    user-select: none;
    list-style: none;
    outline: none;
  }

  summary::marker,
  summary::before {
    display: none;
  }

  summary::-moz-list-bullet {
    font-size: 0;
  }

  summary:focus,
  summary:hover,
  summary:active {
    outline: none;
    list-style: none;
  }

  blockquote {
    padding: calc(0.667 * ${(p) => p.theme.layout.gap}) ${(p) => p.theme.layout.gap};
    color: ${(p) => p.theme.palette.accents_5};
    background-color: ${(p) => p.theme.palette.accents_1};
    border-radius: ${(p) => p.theme.layout.radius.sm};
    margin: 1.5rem 0;
    border: 1px solid ${(p) => p.theme.palette.border};
  }
  blockquote :global(*:first-child) {
    margin-top: 0;
  }
  blockquote :global(*:last-child) {
    margin-bottom: 0;
  }
  ::selection {
    background-color: ${(p) => p.theme.palette.selection};
    color: ${(p) => p.theme.palette.foreground};
  }

  [type='search']::-webkit-search-cancel-button {
    appearance: none;
  }

  .kubed-icon__light {
    color: rgba(255, 255, 255, 0.9);
    fill: rgba(255, 255, 255, 0.4);
  }
`;

const MemoCssBaseline = React.memo(CssBaseline);

export default MemoCssBaseline;
