import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  body {
    font-family: 'Roboto Mono', monospace;
    padding: 0;
    margin: 0;
    color: #333;
  }
  
  body * {
    box-sizing: border-box;
    &::selection {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  
  ul, ol, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  dl, dt, dd, p {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }
  
  button, input, textarea, select, option {
    font-family: 'Nanum Gothic', sans-serif; 
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
    background: none;
  }
`;