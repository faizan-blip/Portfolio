import React , {useState} from 'react'
import { Box, Button, Fab,Typography , IconButton } from '@mui/material'
import {AiOutlineHome,AiOutlinePause} from 'react-icons/ai'
import {FiPlay} from 'react-icons/fi'
import {CiMenuFries} from 'react-icons/ci'
import { motion } from 'framer-motion'
import Drawer from '@mui/material/Drawer';
import { styled} from '@mui/material/styles';
import List from '@mui/material/List';
import {GiTireIronCross} from 'react-icons/gi'
import {AiOutlineMessage,AiOutlineUser,} from 'react-icons/ai'
import {BsPersonWorkspace} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import{MdOutlineMiscellaneousServices} from 'react-icons/md'
import {RiProjectorFill} from 'react-icons/ri'
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Intro() {

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


    const[play , setPlay]= useState(false)
    const playing = ()=>{
        setPlay(prevPlay => !prevPlay);
    }

    const [show , setShow] = useState(true)
    const handleScroll = () => {
      const targetElement = document.getElementById('home'); 
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
    <div id='home'>
    <Box sx={{height:"100%" ,minHeight:{lg:"100vh" , xs:"100%"}, justifyContent:"center" , display:"flex" , flexDirection:"column" , gap:"1.5em" , padding:{xl:"0 0.2em" , xs:"3em 0.2em"} , width:"100%"}}>
            <Box sx={{display:"flex" , justifyContent:"space-between"}}>
              {
                show &&
   
            <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1.2 , ease:"easeOut"}}
          >
            <Button variant='outlined' sx={{borderColor:"#494949 !important" , fontWeight:"500", color:"#fff !important" , display:"flex" , alignItems:"center" , gap:"0.5em" , height:"3em" , borderRadius:"25px" , fontSize:"17px" , width:"11em"}}> <AiOutlineHome/> Introduce</Button>
            </motion.div>
                       }
            <Fab onClick={handleDrawerOpen}   sx={{border:"1px solid #494949" ,   background:"rgba(15,15,15,0.5) !important" , backdropFilter:"blur(10px)" , position:{lg:"relative" , xs:"fixed"} , right:{lg:"4em" , xs:"3em"}  , top:{lg:"0" , xs:"5em"}}}><CiMenuFries className='hover' color='#fff' size={20}/></Fab>
            </Box>
            {
              show &&

          <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1.2 , ease:"easeOut", delay:0.2}}
          >
             <Typography color="#fff" sx={{fontWeight:"500" , fontSize:{md:"62px" , sm:"55px" , xs:"45px"} , width:{lg:"80%"  , xs:"100%"} }}>
                Say Hi from <span style={{color:"#9d00ff"}}> Faizan</span> , Full Stack Web Developer and UI/UX Designer
             </Typography>
             </motion.div>
                         }
                         {
                          show &&
     
             <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut", delay:0.4}}
          >
<Typography color='#494949' sx={{fontWeight:"500" , fontSize:"20px" , width:{lg:"60%" , xs:"100%"}}}>Passionate full-stack web developer and UI/UX designer,creating exceptional digital experiences.</Typography>
</motion.div>
                    }
<Fab className='floating-element' onClick={playing} sx={{ transform: "Scale(2.5)", marginTop: "3em", alignSelf: "flex-end", background: "#9d00ff !important", display: "flex", justifyContent: "center", alignItems: "center" ,position:"relative" , right:"15em"}}>
<motion.div 
          initial={{opacity:0}}
          animate={{opacity:1 }}
          transition={{duration:1 , ease:"backOut"}}
          >
  {play ? (
    <>
      <AiOutlinePause  color="#fff" />
      <audio src="/Back in Black Intro.mp3" autoPlay  />
    </>
  ) : (
    <FiPlay  color="#fff" />
  )}
  </motion.div>
</Fab>
         </Box>

         <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background:"rgba(15,15,15,0.5)" , backdropFilter:"blur(10px)"
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <Fab onClick={handleDrawerClose}  sx={{border:"1px solid #494949" , background:"none !important" , marginTop:"1em"}}>
           <GiTireIronCross className='hover' color='#fff' size={20}/>
          </Fab>
        </DrawerHeader>
        {/* <Divider /> */}
        <List>
        <Box sx={{display:"flex" , alignItems:"center" , flexDirection:"column" }}>
             <Typography color='#fff' sx={{fontSize:"25px" , fontWeight:"700"}}>Menu</Typography>    
              <Box sx={{display:"flex" , alignItems:"start" , flexDirection:"column" , marginTop:"3em" , gap:"0.7em" }}>
              <IconButton  >
          <a href="/#home" style={{display:"flex" , gap:"0.3em" , textDecoration:"none" }}>  <AiOutlineHome className='hover' color='#fff'/><Typography className='hover' color='#fff' sx={{fontSize:"17px" , fontWeight:"700"}}>Home</Typography></a> 
            </IconButton>
            <IconButton  >
       <a href="/#about" style={{display:"flex" , gap:"0.3em" , textDecoration:"none"}}>  <AiOutlineUser className='hover' color='#fff'/><Typography className='hover' color='#fff' sx={{fontSize:"17px" , fontWeight:"700"}}>About</Typography></a>  
            </IconButton>
            <IconButton  >
       <a href="/#resume" style={{display:"flex" , gap:"0.3em" , textDecoration:"none"}}>  <BsPersonWorkspace className='hover' color='#fff'/> <Typography className='hover' color='#fff' sx={{fontSize:"17px" , fontWeight:"700"}}>Resume</Typography></a>
            </IconButton>
            <IconButton  >
 <a href="/#service" style={{display:"flex" , gap:"0.3em" , textDecoration:"none"}}>      <MdOutlineMiscellaneousServices className='hover' color='#fff'/> <Typography className='hover' color='#fff' sx={{fontSize:"17px" , fontWeight:"700"}}>Service</Typography></a>  
            </IconButton>
            <IconButton  >
        <a href="/#skill" style={{display:"flex" , gap:"0.3em" , textDecoration:"none"}}> <GiSkills className='hover' color='#fff'/> <Typography className='hover' color='#fff' sx={{fontSize:"17px" , fontWeight:"700"}}>Skills</Typography></a> 
            </IconButton>
            <IconButton  >
         <a href="/#project" style={{display:"flex" , gap:"0.3em" , textDecoration:"none"}}> <RiProjectorFill className='hover' color="#fff"/> <Typography className='hover' color='#fff' sx={{fontSize:"17px" , fontWeight:"700"}}>Projects</Typography></a>
            </IconButton>
            <IconButton >
 <a href="/#contact" style={{display:"flex" , gap:"0.3em" , textDecoration:"none"}}> <AiOutlineMessage className='hover' color="white"/> <Typography className='hover' color='#fff' sx={{fontSize:"17px" , fontWeight:"700"}}>Contact</Typography></a>
            </IconButton>
              </Box>
        </Box>
        </List>
      </Drawer>
         </div>
         </>
  )
}
