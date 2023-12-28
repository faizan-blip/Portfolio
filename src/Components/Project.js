import React , {useState} from 'react'
import { Box ,Button, Fab, Paper, Skeleton, Typography} from '@mui/material'
import {RiProjectorFill} from 'react-icons/ri'
import ft from '../Components/Images/lets talk.png'
import inn from '../Components/Images/HD.png'
import xp from '../Components/Images/xp.png'
import meta from '../Components/Images/poster meta.png'
import kid from '../Components/Images/LOGO (2).png'
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs,TbBrandFigma} from 'react-icons/tb'
import {SiExpress,SiMui,SiFirebase,SiFramer, SiJavascript, SiMongodb} from 'react-icons/si'
import {} from 'react-icons/bs'
import {TiCss3} from 'react-icons/ti'
import { motion } from 'framer-motion'
export default function Project() {
      
const [show , setShow] = useState(false)
const handleScroll = () => {
  const targetElement = document.getElementById('project'); 
  if (targetElement) {
    const targetPosition = targetElement.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > targetPosition) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
};
window.addEventListener('scroll', handleScroll);
  return (
    <div id='project'>
  <Box sx={{height:"100%" , minHeight:{lg:"100vh" , xs:"100%"}, background:"#0f0f0f" , color:"#fff" , display:"flex", width:"100%" , marginTop:{xl:"5.2em",lg:"3.5em" , xs:"0em"} , flexDirection:"column" , gap:"1.5em" , padding:{lg:"0" ,xs:"3em 0em"}}}>
  {
    show &&
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut"}}
          >
  <Button variant='outlined' sx={{borderColor:"#494949 !important" , fontWeight:"500", color:"#fff !important" , display:"flex" , alignItems:"center" , gap:"0.5em" , height:"3em" , borderRadius:"25px" , fontSize:"17px" , width:"11em"}}> <RiProjectorFill/> Portfolio</Button>
  </motion.div>
}
{
    show &&
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.2}}
          >
 <Typography sx={{fontWeight:"500" , fontSize:{lg:"50px", md:"45px", xs:"40px"} , width:{lg:"80%" , xs:"100%"}}} color='#fff'><span style={{color:"#9d00ff"}}>Personal</span> Projects</Typography>
  </motion.div>
}
{
    show &&
  <motion.div 
          initial={{opacity:0 , x:-50}}
          animate={{opacity:1 , x:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.4}}
          >
   <Box sx={{display:"flex" , gap:"1em" ,  width:{lg:"80%" , xs:"100%"} , flexWrap:"wrap"}}>
   <Paper onClick={() => {
    const url = 'https://x-penso.vercel.app/';
    window.open(url, '_blank');
  }}   className='hover3'  sx={{minWidth:"300px" , height:"17em" , borderRadius:"18px" , flexGrow:"1" , position:"relative" , background:"none"}}>
        <img src={xp} className='xp' alt="" width={200} style={{position:"absolute" , top:"45%" , left:"50%" , transform:"translate(-50% , -50%)"}} />
        <Typography sx={{position:"absolute"  , left:"05%" , top:"10%" , fontSize:"20px" , color:"#fff"}}>Xpenso</Typography>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"7%" , right:"10%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><TbBrandNextjs/></Fab>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"7%" , right:"20%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiExpress/></Fab>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"7%" , right:"30%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiMongodb/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"7%" , right:"40%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiMui/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"7%" , right:"50%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiJavascript/></Fab>
       </Paper>  
  <Paper onClick={() => {
    const url = 'https://first-talk.netlify.app/';
    window.open(url, '_blank');
  }}   className='hover3'  sx={{minWidth:"300px" , height:"17em" , borderRadius:"18px" , flexGrow:"1" , position:"relative" , background:"none"}}>
        <img src={ft} className='ft' alt="" width={400} style={{position:"absolute" , top:"45%" , left:"50%" , transform:"translate(-50% , -50%)"}} />
        <Typography sx={{position:"absolute"  , left:"05%" , top:"10%" , fontSize:"20px" , color:"#fff"}}>First-talk</Typography>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"7%" , right:"10%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><FaReact/></Fab>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"7%" , right:"20%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiFirebase/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"7%" , right:"30%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiMui/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"7%" , right:"40%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiJavascript/></Fab>
       </Paper>  
    <Paper onClick={() => {
    const url = 'https://hands-down.netlify.app/';
    window.open(url, '_blank');
  }}  className='hover3' sx={{minWidth:"300px" , height:"17em" , borderRadius:"18px" , flexGrow:"1" , position:"relative" , background:"none"}}>
        <img src={inn} alt="" width={250} style={{position:"absolute" , top:"45%" , left:"50%" , transform:"translate(-50% , -50%)"}} />
        <Typography sx={{position:"absolute"  , right:"5%" , top:"5%" , fontSize:"20px" , color:"#fff"}}>Hands-Down</Typography>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"10%" ,  background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><FaReact/></Fab>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"20%" , background:"none !important", color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><TiCss3/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"30%" ,  background:"none !important", color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiFramer/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"40%" , background:"none !important", color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><TbBrandFigma/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"50%" , background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiJavascript/></Fab>
       </Paper>
    <Paper  onClick={() => {
    const url = 'https://meta-work.netlify.app/';
    window.open(url, '_blank');
  }}  className='hover3' sx={{minWidth:"300px" , height:"17em" , borderRadius:"18px" , flexGrow:"1" , position:"relative", background:"none"}}>
        <img  src={meta} alt="" width={300} style={{position:"absolute" , top:"50%" , left:"50%" , transform:"translate(-50% , -50%)"}} />
        <Typography className='meta' sx={{position:"absolute"  , left:"10%" , top:"10%" , fontSize:"20px" , color:"#fff"}}>Meta-Work</Typography>
        <Fab  className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"10%" , background:"none !important", color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><FaReact/></Fab>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"20%" ,  background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiMui/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"30%" ,  background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiJavascript/></Fab>
       </Paper> 
  </Box>
  </motion.div>
}
  
   <Typography sx={{fontWeight:"500" , fontSize:{lg:"50px", md:"45px", xs:"40px"} , width:{lg:"80%" , xs:"100%"}}} color='#fff'><span style={{color:"#9d00ff"}}>Freelance</span> Projects</Typography>
   {
    show &&
  <motion.div 
          initial={{opacity:0 , x:-50}}
          animate={{opacity:1 , x:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.6}}
          >
   <Box  sx={{display:"flex" , gap:"1em" ,  width:{lg:"80%" , xs:"100%"} , flexWrap:"wrap"}}>
       <Paper  onClick={() => {
    const url = 'https://superkid.co.in/';
    window.open(url, '_blank');
  }} className='hover3'  sx={{minWidth:"300px" , height:"17em" , borderRadius:"18px" , flexGrow:"1" , position:"relative" , background:"none"}}>
        <img src={kid} alt="" width={100} style={{position:"absolute" , top:"50%" , left:"50%" , transform:"translate(-50% , -50%)"}} />
        <Typography sx={{position:"absolute"  , left:"10%" , top:"10%" , fontSize:"20px" , color:"#fff"}}>Super-Kid</Typography>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"10%" ,  background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><TbBrandNextjs/></Fab>
        <Fab className='hover3'  variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"20%" ,  background:"none !important" , color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiMui/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"30%" , background:"none !important", color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiExpress/></Fab>
        <Fab  className='hover3' variant='contained' sx={{position:"absolute" , bottom:"10%" , right:"40%" ,  background:"none !important", color:"#fff" , backdropFilter:"blur(2px)" , fontWeight:"700" , borderRadius:"25px" }}><SiJavascript/></Fab>
       </Paper>

       <Paper className='hover3'  sx={{minWidth:"300px" , height:"17em" , borderRadius:"18px" , flexGrow:"1" , position:"relative" , background:"none"}}>
       <Skeleton variant='rounded' sx={{width:"200px" , height:"10em",position:"absolute" , top:"40%" , left:"50%" , transform:"translate(-50% , -50%)"  }}/>
       <Skeleton variant="circular"  sx={{position:"absolute" , bottom:"5%" , right:"10%"   }}><Fab/></Skeleton>
       <Skeleton variant="circular"  sx={{position:"absolute" , bottom:"5%" , right:"20%"  }}><Fab/></Skeleton>
       <Skeleton variant="circular"  sx={{position:"absolute" , bottom:"5%" , right:"30%"  }}><Fab/></Skeleton>
       </Paper> 
   </Box>
   </motion.div>
}
  </Box>
  </div>
  )
}
