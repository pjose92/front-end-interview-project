import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: sofia-pro, sans-serif;
        height: 100%;
        background-color: white;
        font-size: 16px;
    }

    .hamburger{
        margin-top:1rem;
        margin-left:1rem;
      }
      @media (min-width: 600px) {
        .hamburger{
            display: none;
        }
      }


    // html, body {
    //     font-family: sofia-pro, sans-serif;
    //     font-style: normal;
    //     font-weight: 400;
    //     margin: 0;
    //     padding: 0;
    // }
`;

export default GlobalStyles;
