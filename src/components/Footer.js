import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon  from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";


import "../styles/Footer.css";



export default function Footer() {
    
  return (
    
    <div className="footer">
      
        <div className="socialMedia">
           <InstagramIcon onClick={event =>  window.open('https://www.instagram.com/yash3369/?next=%2F', '_blank')}/>
           <LinkedInIcon onClick={event =>  window.open('https://www.linkedin.com/in/yash-raj-9a338b200/', '_blank')}/>
           <GitHubIcon onClick={event =>  window.open('https://github.com/yxshrraj', '_blank')} />
           <EmailIcon onClick={event =>  window.open('mailto:yashrrajsinha94@gmail.com', '_blank')}/>
           
           </div>
        <p> &copy; 2023 yashrajsinha.com </p>
        
    </div>
  )
}
