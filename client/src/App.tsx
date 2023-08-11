import React from 'react';
import UrlSHortnerForm from './compenant/UrlSHortnerForm';
import Background from './compenant/Background';
import {Box} from "@chakra-ui/react"

function App() {
  return (
    <Box 
    height={'100%'}
    display={'flex'}
    alignItems={'center'}
    justifyContent={'center'}>
      <div className="App">
        <UrlSHortnerForm/>
        <Background/>
      </div>
    </Box>
  );
}

export default App;
