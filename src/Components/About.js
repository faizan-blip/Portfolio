import { Box ,Button, Typography} from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { motion } from 'framer-motion'
export default function About() {

  const [show , setShow] = useState(false)
  const handleScroll = () => {
    const targetElement = document.getElementById('about'); 
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
  <>
  <div id='about'>
  <Box sx={{height:"100%" , minHeight:{lg:"100vh" , xs:"100%"}, background:"#0f0f0f" , color:"#fff" , display:"flex", width:"100%" , marginTop:{xl:"5.2em",lg:"3.5em" , xs:"0em"} , flexDirection:"column" , gap:"1.5em" , padding:{lg:"0" ,xs:"3em 0.2em"}}}>
  {
    show &&

  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut"}}
          >
  <Button variant='outlined' sx={{borderColor:"#494949 !important" , fontWeight:"500", color:"#fff !important" , display:"flex" , alignItems:"center" , gap:"0.5em" , height:"3em" , borderRadius:"25px" , fontSize:"17px" , width:"11em"}}> <AiOutlineUser/> About</Button>
  </motion.div>
    }
    {
      show &&

  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.2}}
          >
 <Typography sx={{fontWeight:"500" , fontSize:{lg:"50px", md:"45px", xs:"40px"} , width:{lg:"80%" , xs:"100%"}}} color='#fff'>Every <span style={{color:"#9d00ff"}}>Web Developer</span> embarks on their journey with a blank canvas</Typography>
 </motion.div>
     }
      {
      show &&
 <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.4}}
          >
  <Typography color='#494949' sx={{fontWeight:"500" , fontSize:"20px" , width:{lg:"70%" , xs:"100%"}}}>Hello, I'm Faizan Akram, an enthusiastic full-stack web developer with a keen passion for UI/UX designing. I love bringing ideas to life by programming, and designing both professional and unconventional projects. I believe in pushing boundaries and thinking outside the box to deliver unique and captivating web solutions. Juggling multiple projects and meeting deadlines is my superpower and singing is another passion of mine. So, if you need a developer who can hit those high notes while coding up a storm, look no further!</Typography>
  </motion.div>
}
  </Box>
  </div>
  </>
  )
}
