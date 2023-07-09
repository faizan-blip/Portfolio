import React , {useState }from 'react'
import { Box ,Button, Divider, Typography} from '@mui/material'
import { AiOutlineMessage} from 'react-icons/ai'
import { motion } from 'framer-motion'
import {  Toaster, toast } from 'react-hot-toast'
import emailValidator from 'email-validator';
import axios from 'axios'
export default function Contact() {
  const [show , setShow] = useState(false)
const handleScroll = () => {
  const targetElement = document.getElementById('contact'); 
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
const [name , setName] = useState('')
const [email , setEmail] = useState('')
const [subject , setSubject] = useState('')
const [phone , setPhone] = useState('')
const [msg , setMsg] = useState('')




const submit = async(e)=>{
  e.preventDefault();
  if(!name || !email || !subject || !msg){
    toast.error("Fill up the Fields")
  } else if(name.length < 5){
    toast.error("Enter a valid name")
  } else if (!emailValidator.validate(email)) {
    toast.error('Enter a valid email address');
  }  else if(phone.length < 10){
    toast.error("Enter a valid phone number")
  } else if(msg.length < 2){
    toast.error("Write a appropriate message")
  } else{
    try{
      const response = await axios.post('http://localhost:4000/api/contact/createdata' , {
        name: name,
        email:email,
        phone:phone,
        subject:subject,
        message:msg
       })
       console.log(response.data);
       toast.success("Send Respond ...")
        setName('')
        setMsg('')
        setEmail('')
        setPhone('')
        setSubject('')  
  }catch(err){
      toast.error(err.message)
  } 

    }
       
 
}



  return (
    <div id='contact'>
      <Toaster toastOptions={{style:{
      background:"rgba(15,15,15,0.45)", backdropFilter:"blur(10px)" ,color:"#fff"
      }}}/>
  <Box sx={{height:"100%" , minHeight:{lg:"100vh" , xs:"100%"}, background:"#0f0f0f" , color:"#fff" , display:"flex", width:"100%" , marginTop:{xl:"5.2em",lg:"3.5em" , xs:"0em"} , flexDirection:"column" , gap:"1.5em" , padding:{lg:"0" ,xs:"3em 0em"}}}>
  {
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut"}}
          >
  <Button variant='outlined' sx={{borderColor:"#494949 !important" , fontWeight:"500", color:"#fff !important" , display:"flex" , alignItems:"center" , gap:"0.5em" , height:"3em" , borderRadius:"25px" , fontSize:"17px" , width:"11em"}}> <AiOutlineMessage/> Contact</Button>
 </motion.div>
}
{
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut" , delay:0.2}}
          >
 <Typography sx={{fontWeight:"500" , fontSize:{lg:"50px", md:"45px", xs:"40px"} , width:{lg:"80%" , xs:"100%"}}} color='#fff'>Let's Work <span style={{color:"#9d00ff"}}>Together</span></Typography>
  </motion.div>
}
{
    show &&
   
  <motion.div 
          initial={{opacity:0 , y:200}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1 , ease:"easeOut", delay:0.4}}
          >
  <Box sx={{display:"flex" , flexDirection:"column" , width:{lg:"85%" , xs:"100%"} , gap:"2em"}}>
   
      <Box sx={{display:"flex" , justifyContent:"space-between" , gap:"2em" , flexWrap:{lg:"nowrap" , xs:"wrap"}}}>
         <Box sx={{display:"flex" , flexDirection:"column" , width:{lg:"50%", xs:"100%"} , gap:"0.5em"}}>
          <Typography color='#fff' sx={{fontSize:"18px" , fontWeight:"500"}}>FULL NAME </Typography>
           <input name="name" onChange={(e)=> setName(e.target.value)} value={name} placeholder='Your Full Name' type="text" style={{border:"none"  , height:"3em" , width:"100%",background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}} />
         </Box>
         <Box sx={{display:"flex" , flexDirection:"column",  width:{lg:"50%", xs:"100%"}, gap:"0.5em"}}>
          <Typography color='#fff' sx={{fontSize:"18px" , fontWeight:"500"}}>EMAIL </Typography>
           <input name="email" onChange={(e)=> setEmail(e.target.value)} value={email}  placeholder='Your email address' type="email" style={{border:"none" , height:"3em" , width:"100%",background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}} />
         </Box>
      </Box>
      <Box sx={{display:"flex" , justifyContent:"space-between" , gap:"2em" , flexWrap:{lg:"nowrap" , xs:"wrap"}}}>
         <Box sx={{display:"flex" , flexDirection:"column" ,  width:{lg:"50%", xs:"100%"} , gap:"0.5em"}}>
          <Typography color='#fff' sx={{fontSize:"18px" , fontWeight:"500"}}>PHONE <span style={{color:"#494949" , fontSize:"16px"}}>(optional)</span> </Typography>
           <input onChange={(e)=> setPhone(e.target.value)} value={phone} placeholder='Your Full Name' type="text" style={{border:"none"  , height:"3em" , width:"100%",background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}} />
         </Box>
         <Box sx={{display:"flex" , flexDirection:"column",  width:{lg:"50%", xs:"100%"} , gap:"0.5em"}}>
          <Typography color='#fff' sx={{fontSize:"18px" , fontWeight:"500"}}>SUBJECT </Typography>
           <input onChange={(e)=> setSubject(e.target.value)} value={subject}  placeholder='Your subject' type="text" style={{border:"none" , height:"3em" , width:"100%",background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}} />
         </Box>
      </Box>
      <Box sx={{display:"flex" , flexDirection:"column" , width:"100%" , gap:"0.5em"}}>
          <Typography color='#fff' sx={{fontSize:"18px" , fontWeight:"500"}}>MESSAGE</Typography>
           <textarea  name="message"  onChange={(e)=> setMsg(e.target.value)} value={msg}  placeholder='Write your message here ...' rows="10" style={{border:"none"  ,  width:"100%",background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}} />
         </Box>

         <Divider sx={{width:"100%" , borderColor:"#494949" , marginTop:"1em"}}/>
         <Button onClick={submit} variant='contained' sx={{alignSelf:"flex-start" , marginTop:"0.5em" , marginBottom:"1em" , borderRadius:"25px" , background:"#9200ff !important" , width:"11em" , fontSize:"20px"}}>SEND MESSAGE</Button>
  </Box>
  </motion.div>
}
  </Box>
  </div>
  )
}
