import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #root{
    height: 100%;
  }

  :root{
    --blue-low: rgba(237, 243, 248, 1);
    --blue-low-transparent: rgba(237, 243, 248, 0.56);
    --blue-primary: rgba(0, 42, 255, 1);
    --gray-primary: rgba(193, 187, 187, 1);
  }

  body{
    font-family: 'Poppins', sans-serif;
    height: 100vh;

    ::-webkit-scrollbar {
      width: 10px;
      height: 5px;
    }
    ::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
      background: white;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--blue-primary);
      border-radius: 10px;
      border: 2px solid white;
    }
  }

  input{
    outline: none;
  }

  button{
    cursor: pointer;

    transition: all 0.3s ease;

    :hover{
      filter: brightness(93%);
    }
  }
`;


export default GlobalStyle;