import { Box, Button, Fab, IconButton, Tooltip, Typography } from '@mui/material'
import React , {useEffect} from 'react'
import logo from '../Components/Images/LG.JPG.png'
import {SiLinktree} from 'react-icons/si'
import {AiOutlineGithub ,AiOutlineInstagram ,AiOutlineLinkedin ,AiOutlineMessage,AiOutlineHome,AiOutlineUser,} from 'react-icons/ai'
import {BsPersonWorkspace} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import{MdOutlineMiscellaneousServices} from 'react-icons/md'
import {RiProjectorFill} from 'react-icons/ri'
import my from '../Components/Images/my.jpg'
import Intro from '../asset/Intro'
import About from './About'
import Resume from './Resume'
import Service from './Service'
import Project from './Project'
import Skill from './Skill'
import Contact from './Contact'
import Typed from 'typed.js'
export default function Landing() {

    const logoin=[
          {url:'https://linktr.ee/faizan.akram' ,icon: <SiLinktree  size={20} color="#494949" />},
         {url:'https://github.com/faizan-blip' ,icon: <AiOutlineGithub size={20} color="#494949"/>},
        {url:'https://www.instagram.com/f_.a_.i_.z_.a_.n/' ,icon:    <AiOutlineInstagram  size={20} color="#494949" />},
          {url:'https://www.linkedin.com/in/faizan-akram-3a5a12247/' ,icon:    <AiOutlineLinkedin size={20} color="#494949"  />}
    ]
    const link = (url , id)=>{
        window.open(url, '_blank');
    }
    useEffect(()=>{
      var typed = new Typed(".typed", {
          strings: ["Full Stack Web Developer" , "UI/UX Designer" , "Programmer"],
          typeSpeed: 100,
          backSpeed: 50,
          loop: true,
          showCursor: true
      });
      return ()=>{
          typed.destroy()
      }
    },[])
  return (
    <Box sx={{minHeight:"100vh",height:"100%" , background:"#0f0f0f" , display:"flex" , justifyContent:"space-evenly" , padding:{lg:"0 1em" , xs:"1em 1em "} , alignItems:"center" , flexWrap:{lg:"nowrap" , xs:"wrap"}}}>
         <Box sx={{width:{lg:"40%" , xs:"100%"}, height:"100%" , minWidth:{lg:"390px" , xs:"300px"}}}>
           <Box sx={{ minWidth:{sm:"300px" , xs:"auto"}, border:"1px solid white" , borderRadius:"18px", padding:"0em 1.5em", display:"flex" , flexDirection:"column" , gap:"1.5em" , paddingBottom:"2em" , position:{lg:"fixed" , xs:"inherit"}, left:"0" , top:"7%" , marginLeft:{lg:"1.2em" , xs:"0"} }}>
            <Box sx={{display:"flex" , gap:"2em" , width:"100%" , justifyContent:"space-between" , alignItems:"center"}}>
                <Typography color='#fff'><img src={logo} alt="" width={100} /></Typography>
                <Typography  color='#fff' style={{fontSize:{sm:"15px", xs:"13px"} , width:"7em"}}> <span className='typed'></span> </Typography>
            </Box>
            <Box sx={{height:{lg:"200px" , sm:"500px" , xs:"200px"} ,minWidth:{sm:"300px" , xs:"auto"} , background:`url(${my})` , borderRadius:"15px" , backgroundSize:"cover" , backgroundPosition:"center" ,   filter: 'grayscale(100%)' , backgroundPositionY:"-20px" , backgroundRepeat:"no-repeat" }}>

            </Box>
            <Box sx={{display:"flex" , flexDirection:"column", alignItems:"center" , marginTop:"0.6em"}}>
                <Typography color='#fff' sx={{fontWeight:"700" , fontSize:"40px"}}>Faizan Akram</Typography>
                <Typography color='#494949'sx={{fontWeight:"700" , fontSize:"17px"}}>© 2023 Faizan. All Rights Reserved</Typography>
            </Box>
            <Box sx={{display:"flex" , gap:"0.5em" , alignItems:"center"  , justifyContent:"center"}}>
                   {
                    logoin.map((index , idx)=>(
                        <Fab onClick={()=> link(index.url , index)} sx={{background:"none"}} key={idx}>{index.icon}</Fab>
                    ))
                   }
            </Box>
            <Button  onClick={() => {
    const mailtoLink = 'mailto:faizanrock753@gmail.com';
    window.location.href = mailtoLink;
  }} variant='contained' sx={{display:"flex" , alignItems:"center" , gap:"0.5em" , color:"#fff" , background:"#9D00FF !important" , height:"3em" , borderRadius:"25px" , fontWeight:"700",fontSize:"17px"}}> <AiOutlineMessage size={20}/> Hire me</Button>
            </Box> 
         </Box>
         <Box sx={{display:"flex" , flexDirection:"column" }}>
       <Intro/>
        <About/>
        <Resume/>
        <Service/>
    <Skill/>
    <Project/>
    <Contact/>
        </Box>
         <Box sx={{ height:"100%"  , display:{lg:"block" , xs:"none"}}}>
         <Box sx={{minWidth:"200px" , display:"flex"  , flexDirection:"column" , gap:"2.5em" , alignItems:"center" , justifyContent:"start" , position:"fixed" , right:"0" , top:"30%"}}>
            <Box sx={{minWidth:"2.2em", height:"100%" , border:"1px solid #494949" , borderRadius:"25px" , display:"flex" , flexDirection:"column" , gap:"0.4em" , padding:"0.5em 0.3em" , color:"#fff" , background:"rgba(15,15,15,0.45)", backdropFilter:"blur(10px)" }}>
            <Tooltip  title="Home" placement="left" arrow>
<IconButton >
          <a href="/#home">  <AiOutlineHome className='hover' color='#fff'/></a> 
            </IconButton>
            </Tooltip>
            <Tooltip title="About" placement="left" arrow>
         <IconButton >
       <a href="/#about">  <AiOutlineUser className='hover' color='#fff'/></a> 
            </IconButton>
            </Tooltip>
            <Tooltip title="Resume" placement="left" arrow>
         <IconButton  >
       <a href="/#resume">  <BsPersonWorkspace className='hover' color='#fff'/></a> 
            </IconButton>
            </Tooltip>
            <Tooltip title="Service" placement="left" arrow>
         <IconButton  >
 <a href="/#service">      <MdOutlineMiscellaneousServices className='hover' color='#fff'/></a>   
            </IconButton>
            </Tooltip>
            <Tooltip title="Skills" placement="left" arrow>
            <IconButton  >
        <a href="/#skill"> <GiSkills className='hover' color='#fff'/></a>  
            </IconButton>
            </Tooltip>
            <Tooltip title="Projects" placement="left" arrow>
         <IconButton  >
         <a href="/#project"> <RiProjectorFill className='hover' color="#fff"/></a>
            </IconButton>
            </Tooltip>
            <Tooltip title="Contact" placement="left" arrow>
         <IconButton  >
 <a href="/#contact">        <AiOutlineMessage className='hover' color="white"/></a> 
            </IconButton>
            </Tooltip>
            </Box>
         </Box>
         </Box>
    </Box>
  )
}
