import { useState } from 'react';
import './App.css';
import Landing from './Components/Landing';
import { ColorRing } from 'react-loader-spinner';
import { Box } from '@mui/material';
function App() {

  const [spin , setSpin]= useState(true)

  setTimeout(() => {
    setSpin(false)
  }, 1500);
  return (
   <>
   {
     spin ? (
    <Box sx={{minHeight:"100vh" , height:"100%" , display:"flex" , justifyContent:"center" , alignItems:"center" , background:"#000"}}>
      <ColorRing
  visible={true}
  height="100"
  width="100"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#000', '#9D00FF', '#000', '#9D00FF', '#9D00FF']}
/>
</Box>
    ) : (
      <Landing/>
    )
   }
  
   </>
  );
}

export default App;
