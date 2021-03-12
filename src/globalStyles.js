import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
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