import { Box , Typography , Button, Divider, Fab, Tooltip } from '@mui/material'
import React , {useState} from 'react'
import {BsPersonWorkspace} from 'react-icons/bs'
import { motion } from 'framer-motion'
import res from '../Components/Images/resume.png'
export default function Resume() {
    const steps = [{year:"2007 - 2019" , name:"Nirmala English School" , add:"Matriculation"},{year:"2019 - 2021" , name:"St Paul's School " , add:"Intermediate"},{year:"2021 - Present" , name:"Veer Surendra Sai University Of Technology" , add:"B-Tech"},]
    const stepsexp = [{year:"Nov(2023) - Dec(2023)" , name:"STF" , add:"Full Stack Web Developer | UI/UX Designer"},{year:"Jan(2023) - July(2023)" , name:"Graduate Us" , add:"Full Stack Web Developer | UI/UX Designer"},{year:"June(2023) - Present" , name:"Wasper Tech" , add:"Frontend Web Developer"},
]


const [show , setShow] = useState(false)
const handleScroll = () => {
  const targetElement = document.getElementById('resume'); 
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
    <div id='resume'>
    <Box sx={{height:"100%" , minHeight:{lg:"100vh" , xs:"100%"} , color:"#fff" , display:"flex", width:"100%" , marginTop:{xl:"5.2em",lg:"3.5em" , xs:"0em"} , flexDirection:"column" , gap:"1.5em" , padding:{lg:"0" ,xs:"3em 0.2em"}}}>
    {
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut"}}
          >
            <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"space-between" , width:"80%"}}>
  <Button variant='outlined' sx={{borderColor:"#494949 !important" , fontWeight:"500", color:"#fff !important" , display:"flex" , alignItems:"center" , gap:"0.5em" , height:"3em" , borderRadius:"25px" , fontSize:"17px" , width:"11em"}}> <BsPersonWorkspace/> resume</Button>
  <Tooltip title='Download Cv' placement='top'>
  <a href={process.env.PUBLIC_URL + '/faizanakcv.pdf'} download><Fab className='float' sx={{background:"#9D00FF"}}> <img src={res} alt="resume" width={40} /> </Fab></a> 
  </Tooltip>
  </Box>
  </motion.div>
}
{
  show &&
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.2}}
          >
 <Typography sx={{fontWeight:"500" , fontSize:{lg:"50px", md:"45px", xs:"40px"} , width:{lg:"80%" , xs:"100%"}}} color='#fff'>Education & <span style={{color:"#9d00ff"}}>Experience</span></Typography>
 </motion.div>
}
 <Box sx={{display:"flex" , justifyContent:{lg:"space-between" , xs:"start"} , width:{lg:"80%" , xs:"100%"} , flexDirection:{lg:"row" , xs:"column"} , gap:{lg:"0em", xs:"1.2em"} }}>

  <Box  sx={{display:"flex" , flexDirection:"column"}}>
    {
       steps.map((step , index0)=>(

       <Box key={index0} sx={{display:"flex" , gap:"2em"}}>
          {
          show &&
          <motion.div
          initial={{opacity:0 , x:-100}}
          animate={{opacity:1 , x:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.3}}
         >
 
        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
     <Box className='hover1' sx={{width:"1.2em" , height:"1.2em",  background:"#494949" , borderRadius:"50%"}}/>
         <Divider orientation='vertical' sx={{height:"7em" , borderColor:"#494949"}}/>
         </Box>
         </motion.div>
}
{
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut"  , delay:0.5}}
          >
         <Box sx={{display:"flex" , flexDirection:"column"}}>
         <Typography className='hover' color='#494949' sx={{fontSize:"18px" , fontWeight:"500"}}>{step.year}</Typography>
           <Typography  color='white' sx={{fontSize:"25px" , marginTop:"0.4em"}} >{step.name}</Typography>
           <Typography color='#494949' sx={{fontSize:"18px" , fontWeight:"500"}}>{step.add}</Typography>
         </Box>
</motion.div>
}
       </Box>
                   
       ))   
    }
  </Box>
  
  <Box sx={{display:"flex" , flexDirection:"column"}}>
    {
       stepsexp.map((steps , index1)=>(

       <Box key={index1} sx={{display:"flex" , gap:"2em"}}>
        {
          show &&
          <motion.div
          initial={{opacity:0 , x:-100}}
          animate={{opacity:1 , x:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.3}}
         >
 
        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
     <Box className='hover1' sx={{width:"1.2em" , height:"1.2em",  background:"#494949" , borderRadius:"50%"}}/>
         <Divider orientation='vertical' sx={{height:"7em" , borderColor:"#494949"}}/>
         </Box>
        </motion.div>
        }
        {
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut"  , delay:0.5}}
          >
         <Box sx={{display:"flex" , flexDirection:"column"}}>
           <Typography className='hover' color='#494949' sx={{fontSize:"18px" , fontWeight:"500"}}>{steps.year}</Typography>
           <Typography color='white' sx={{fontSize:"25px" , marginTop:"0.4em"}}>{steps.name}</Typography>
           <Typography color='#494949' sx={{fontSize:"18px" , fontWeight:"500"}}>{steps.add}</Typography>
         </Box>
         </motion.div>
}
       </Box>
                   
       ))   
    }
  </Box>
  
 </Box>
  </Box>
  </div>
  )
}
