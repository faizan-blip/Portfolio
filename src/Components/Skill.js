import { Box ,Button, IconButton, Typography} from '@mui/material'
import React , {useState} from 'react'
import {GiSkills} from 'react-icons/gi'
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs,TbBrandJavascript,TbBrandMongodb,TbBrandFigma} from 'react-icons/tb'
import {SiExpress,SiMui,SiFirebase,SiFramer} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {TiHtml5 ,TiCss3} from 'react-icons/ti'
import { motion } from 'framer-motion'
export default function Skill() {
  const icon =[
    {icon:<FaReact className='hover' size={50} color='#fff'/> , per:"React-js"}, 
    {icon:<TbBrandNextjs className='hover' size={50} color='#fff'/> , per:"Next-js"}, 
    {icon:<SiExpress className='hover' size={50} color='#fff'/> , per:"Express-js"}, 
    {icon:<SiFirebase className='hover' size={50} color='#fff'/> , per:"Firebase"}, 
    {icon:<TbBrandMongodb className='hover' size={50} color='#fff'/> , per:"MongoDb"}, 
    {icon:<TbBrandJavascript className='hover' size={50 } color='#fff'/> , per:"Javascript"}, 
    {icon:<SiMui className='hover' size={50} color='#fff'/> , per:"Mui"}, 
    {icon:<TbBrandFigma className='hover' size={50} color='#fff'/> , per:"Html5"},  
    {icon:<BsBootstrap className='hover' size={50} color='#fff'/> , per:"Bootstrap"}, 
    {icon:<SiFramer className='hover' size={50} color='#fff'/> , per:"Framer"}, 
    {icon:<TiCss3 className='hover' size={50} color='#fff'/> , per:"Css3"},
    {icon:<TiHtml5 className='hover' size={50}color='#fff'/> , per:"Html5"},  
  ]

     
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
    <Box sx={{height:"100%" , minHeight:{lg:"100vh" , xs:"100%"}, color:"#fff" , display:"flex", width:"100%" , marginTop:{xl:"5.2em",lg:"3.5em" , xs:"0em"} , flexDirection:"column" , gap:"1.5em" , padding:{lg:"0" ,xs:"3em 0em"}}}>
    {
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut"}}
          >
    <Button variant='outlined' sx={{borderColor:"#494949 !important" , fontWeight:"500", color:"#fff !important" , display:"flex" , alignItems:"center" , gap:"0.5em" , height:"3em" , borderRadius:"25px" , fontSize:"17px" , width:"11em"}}> <GiSkills/> My Skills</Button>
    </motion.div>
}
{
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut", delay:0.2}}
          >
   <Typography sx={{fontWeight:"500" , fontSize:{lg:"50px", md:"45px", xs:"40px"} , width:{lg:"80%" , xs:"100%"}}} color='#fff'>My <span style={{color:"#9d00ff"}}>Advantages</span></Typography>
   </motion.div>
}
{
    show &&
   
  <motion.div 
          initial={{opacity:0 ,scale:0 }}
          animate={{opacity:1 ,scale:1}}
          transition={{duration:1.5 , ease:"backOut" , delay:0.4}}
          >
   <Box sx={{display:"flex" , gap:"1em" , width:{lg:"85%" , xs:"100%"} , alignItems:"center" , flexWrap:"wrap"}}>
       {
        icon.map((id ,index4)=>(
          <Box className='hover2' key={index4} sx={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center", borderRadius:"100px" , border:"1px solid #494949" , padding:"2em 2em" , flexGrow:{xl:"1" , xs:"1"}}}>
            <IconButton className='hover'>{id.icon}</IconButton>
            <Typography color='#9200ff' sx={{fontWeight:"700" , fontSize:"18px"}}>{id.per}</Typography>
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
