
import React from "react";
import Main from "./components/Main.js";
import { Container, Paper, Box, CssBaseline } from '@mui/material'


function App() {
  return (
    <>
    <div className="App">

      <CssBaseline />
      <Container component={Box} p={4} >
          <Paper component={Box} p={3} >  
        <Main/>
        </Paper>
      </Container>
    </div>
      </>
  );
}

export default App;
