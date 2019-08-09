import React from 'react';
import Slider from './Slider';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalBackground = createGlobalStyle`
    body {
        background-color: #282c34;
    }
`;

const StyledApp = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: stretch;
    text-align: center;
    background-color: #282c34;
    height: 100vh;
    color: white;
`;

function App() {
    return (
        <StyledApp>
            <GlobalBackground />
            <Slider />
        </StyledApp>
    );
}

export default App;
