import React, { useEffect, useRef } from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon  from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from '@mui/icons-material/Code';
import "../styles/Home.css";


export default function Home() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['coder', 'developer', 'problem solver','learner'], // The words to be typed
      loop: true, // Set it to true if you want the typing to loop
      typeSpeed: 80, // Typing speed in milliseconds
      backSpeed: 50, // Speed at which the text is deleted in milliseconds
      backDelay: 1500, // Delay between typing and deleting in milliseconds
    };

    // Initialize the Typed.js instance
    const typed = new window.Typed(typedTextRef.current, options);

    // Clean up the Typed.js instance when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className="home">
      <div className="about">
         <h2>Hi, My Name is Yash Raj</h2>
         <div className="prompt">
           <p>
             <i>I'm a <u><span ref={typedTextRef}></span></u></i>
           </p>
           <LinkedInIcon onClick={event => window.open('https://www.linkedin.com/in/yash-raj-9a338b200/', '_blank')} cursor="pointer"/>
           <EmailIcon onClick={event => window.open('mailto:yashrrajsinha94@gmail.com', '_blank')} cursor="pointer"/>
           <GitHubIcon onClick={event => window.open('https://github.com/yxshrraj', '_blank')} cursor="pointer"/>
           <CodeIcon onClick={event => window.open('https://leetcode.com/Yashrrajsinha94/')} cursor="pointer"/>
         </div>
      </div>
     
  <div className="skills">
        <h1>Skills</h1>
        
        <ol className="list">
          <li className="item">
            <h2> Languages </h2>
            <span>
              

  <img src="https://cdn.worldvectorlogo.com/logos/java-4.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
  <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="html" height="85" width="100" style={{ marginRight: '50px' }} />
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="css" height="85" width="100" style={{ marginRight: '50px' }} />
  <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="js" height="85" width="100" style={{ marginRight: '10px' }} />

</span>
       
                
          </li>
          <li className="item">
            <h2>Familiar With</h2>
            <span> 
              {/* Html , Css , Javascript , React Js , Bootstrap, MaterialUI */}
              <img src="https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
              <img src="	https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
              <img src="	https://cdn.worldvectorlogo.com/logos/c.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
              <img src="https://cdn.worldvectorlogo.com/logos/c-1.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
              <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />

            </span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>  
              {/* Vs code , Git , Github, MySQL workbench , Firebase, Auth(0)  */}
              <img src="		https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
              <img src="		https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
              <img src="	https://cdn.worldvectorlogo.com/logos/vmware-1.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
               <img src="	 https://cdn.worldvectorlogo.com/logos/netbeans.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
               <img src="	 https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
               <img src="	https://cdn.worldvectorlogo.com/logos/github-2.svg" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
               <img src="	 https://cdn.auth0.com/website/bob/press/shield-dark.png" alt="java" height="85" width="100" style={{ marginRight: '50px' }} />
               </span>
          </li>   
        </ol>
      </div>
    </div>
    
    </>
  )
}
