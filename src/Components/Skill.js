import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FaJava, FaReact } from 'react-icons/fa'
import { GiSkills, GiNetworkBars } from 'react-icons/gi'
import { SiSpringboot, SiApachekafka, SiMysql, SiHtml5 } from 'react-icons/si'
import { TbBrandMongodb, TbBrandJavascript } from 'react-icons/tb'
import { TiCss3 } from 'react-icons/ti'
import { motion } from 'framer-motion'
export default function Skill() {
  const skills = [
    { name: 'Java', icon: <FaJava size={40} color='#fff' /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={40} color='#fff' /> },
    { name: 'Microservices', icon: <GiNetworkBars size={40} color='#fff' /> },
    { name: 'Kafka', icon: <SiApachekafka size={40} color='#fff' /> },
    { name: 'ReactJS', icon: <FaReact size={40} color='#fff' /> },
    { name: 'SQL', icon: <SiMysql size={40} color='#fff' /> },
    { name: 'MongoDB', icon: <TbBrandMongodb size={40} color='#fff' /> },
    { name: 'JavaScript', icon: <TbBrandJavascript size={40} color='#fff' /> },
    { name: 'HTML5', icon: <SiHtml5 size={40} color='#fff' /> },
    { name: 'CSS', icon: <TiCss3 size={40} color='#fff' /> },
  ]

  const skillCardSx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100px',
    border: '1px solid #494949',
    background: 'rgba(255,255,255,0.04)',
    minHeight: '120px',
    width: '100%',
    minWidth: '0',
    padding: '1em',
    textAlign: 'center',
    boxSizing: 'border-box',
  }

     
const [show , setShow] = useState(false)
const handleScroll = () => {
  const targetElement = document.getElementById('skill'); 
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
    <div id='skill'>
    <Box sx={{
      height: '100%',
      minHeight: { lg: '100vh', xs: '100%' },
      color: '#fff',
      display: 'flex',
      width: '100%',
      maxWidth: '1200px',
      mx: 'auto',
      flexDirection: 'column',
      gap: '1.5em',
      padding: { lg: '0', xs: '0' },
      marginTop: { xl: '5.2em', lg: '3.5em', xs: '0em' },
      overflowX: 'hidden',
    }}>
    {
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut"}}
          >
    <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
      <Button variant='outlined' sx={{borderColor:"#494949 !important" , fontWeight:"500", color:"#fff !important" , display:"flex" , alignItems:"center" , gap:"0.5em" , height:"3em" , borderRadius:"25px" , fontSize:"17px" , minWidth:"11em"}}> <GiSkills/> My Skills</Button>
    </Box>
    </motion.div>
}
{
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut", delay:0.2}}
          >
   <Typography sx={{fontWeight:"500" , fontSize:{lg:"50px", md:"45px", xs:"40px"} , width:{lg:"80%" , xs:"100%"}, textAlign:{xs:'center', lg:'left'}, mx:{xs:'auto', lg:'0'}}} color='#fff'>My <span style={{color:"#9d00ff"}}>Advantages</span></Typography>
   </motion.div>
}
{
    show &&
   
  <motion.div 
          initial={{opacity:0 ,scale:0 }}
          animate={{opacity:1 ,scale:1}}
          transition={{duration:1.5 , ease:"backOut" , delay:0.4}}
          >
   <Box sx={{
     display: 'grid',
     gridTemplateColumns: { lg: 'repeat(3, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))', sm: 'repeat(2, minmax(0, 1fr))', xs: 'repeat(1, minmax(0, 1fr))' },
     gap: '1em',
     width: '100%',
     alignItems: 'stretch',
     gridAutoRows: '1fr',
   }}>
       {
        skills.map((skill ,index4)=>(
          <Box key={index4} sx={skillCardSx}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:'0.8em'}}>
              {skill.icon}
              <Typography color='#fff' sx={{fontWeight:'700' , fontSize:'18px'}}>{skill.name}</Typography>
            </Box>
          </Box>
        ))
       }
   </Box>
   </motion.div>
}
    </Box>
    </div>
  )
}
