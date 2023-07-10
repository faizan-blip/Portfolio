import React , {useState} from 'react'
import { Box , Typography , Button } from '@mui/material'
import{MdOutlineMiscellaneousServices} from 'react-icons/md'
import {SiAltiumdesigner} from 'react-icons/si'
import {VscSymbolInterface} from 'react-icons/vsc'
import {RiMiniProgramLine} from 'react-icons/ri'
import { motion } from 'framer-motion'
export default function Service() {
    const details = [
        {name:"Website Design and Development" , desc:"Created landing page & Ecommerce platform with unique design" , icon:<SiAltiumdesigner size={50}/>},
        {name:"UI/Ux Design" , desc:"Created a unique design with prototype" , icon:<VscSymbolInterface  size={50}/>},
        {name:"Competitive Programmer" , desc:"Codechef" , icon:<RiMiniProgramLine size={50}/>},
    ]

    
const [show , setShow] = useState(false)
const handleScroll = () => {
  const targetElement = document.getElementById('service'); 
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
    <div id='service'>
  <Box sx={{height:"100%" , minHeight:{lg:"100vh" , xs:"100%"} , color:"#fff" , display:"flex", width:"100%" , marginTop:{xl:"5.2em",lg:"3.5em" , xs:"0em"} , flexDirection:"column" , gap:"1.5em" , padding:{lg:"0" ,xs:"3em 0em"}}}>
  {
    show &&
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut"}}
          >
  <Button variant='outlined' sx={{borderColor:"#494949 !important" , fontWeight:"500", color:"#fff !important" , display:"flex" , alignItems:"center" , gap:"0.5em" , height:"3em" , borderRadius:"25px" , fontSize:"17px" , width:"11em"}}> <MdOutlineMiscellaneousServices/> Services</Button>
  </motion.div>
}
{
    show &&
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.2}}
          >
 <Typography sx={{fontWeight:"500" , fontSize:{lg:"50px", md:"45px", xs:"40px"} , width:{lg:"80%" , xs:"100%"}}} color='#fff'>My <span style={{color:"#9d00ff"}}>Specializations</span></Typography>
 </motion.div>
}
{
    show &&
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.4}}
          >
 <Box sx={{display:"flex" , flexDirection:"column" , gap:"0.7em",width:{lg:"80%" , xs:"100%"} , marginBottom:"1.5em" }}>
    {
        details.map((det , index3)=>(
<Box className='hover2' key={index3} sx={{width:{lg:"100%" , xs:"auto"}, border:"1px solid #494949" , borderRadius:"25px" , display:"flex" , flexDirection:"column" , padding:"2em 2em" }}>
     <Typography className='hover'>{det.icon}</Typography>
     <Typography sx={{fontSize:"25px"}}>{det.name}</Typography>
     <Typography sx={{fontSize:"16px" , color:"#494949"}}>{det.desc}</Typography>
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
