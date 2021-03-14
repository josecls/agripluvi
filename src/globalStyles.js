import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap');

    html, body, #root {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1 {
        font-family: 'Raleway';
        font-weight: bold;
        color: #fff;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #000;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 80vw;
    height: 60vh;
`