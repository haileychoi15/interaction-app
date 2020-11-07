import React from "react";
import Router from "./Router";
import styled from "styled-components";
import {GlobalStyles} from "./GlobalStyles";

const Container = styled.div`
  position: relative;
`;

function App() {
  return (
    <Container className="App">
        <GlobalStyles />
        <Router />
    </Container>
  );
}

export default App;
