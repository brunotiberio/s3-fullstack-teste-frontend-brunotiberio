import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *{        
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        body{
            background-color: #0B2D38;
        }

        h1,h2,h3,div,p,form{
        background-color: transparent;
    }

    button{
        cursor: pointer;
        background-color: #857C13;
        border-radius: 20px 20px;
    }

    button:hover{
        background-color: #38101C;
        color: white;
    }
    }

`;
