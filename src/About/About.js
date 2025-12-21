// About.js
import React from 'react';
import pic from "../assets/profile.jpg";
import './About.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faDropbox } from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
import githubIcon from "../assets/github-brands-solid.svg";
import linkedinIcon from "../assets/linkedin-brands-solid.svg";
import resumeIcon from "../assets/resume-solid.svg";
import statementClipboard from "../assets/statement-clipboard.svg";


// library.add(faGraduationCap, faGithub, faDropbox);


const About = () => {
  return (
    <div className="page-background">
    <div className="about-container">
      <div className="about-left">
        <img  
          src={pic} 
          alt="headshot"  
          className="about-image" 
        />
        <div className="contact-info">            

          <div className="contact-name">Vaishnavi Lokhande</div>
          <a href="mailto:slokhand@buffalo.edu" className="email-link">
            slokhand@buffalo.edu
          </a>
          <div className="social-links"> 
            {/* <a 
              href="https://scholar.google.com/citations?user=rGRsWH8AAAAJ"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={googleScholarIcon} 
                alt="Google Scholar"
                className="icon-image"
              />
            </a> */}
            <a 
              href="https://github.com/iamvl"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={githubIcon} 
                alt="GitHub"
                className="icon-image"
              />
              <span className="social-label">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/vaishnavi-lokhande000/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="icon-image"
              />
              <span className="social-label">LinkedIn</span>
            </a>
            {/* { <a 
              href="https://x.com/simran_s_arora"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={twitterIcon} 
                alt="Twitter"
                className="icon-image"
              />
            </a>} */}       
            <a 
              href={require("../assets/Vaishnavi_Lokhande_PHD_CV.pdf")}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={resumeIcon}
                alt="Resume"
                className="icon-image"
              />
              <span className="social-label">Resume</span>
            </a>
            <a 
              href={require("../assets/Vaishnavi_Lokhande_statement_of_interests.pdf")}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={statementClipboard}
                alt="Statement"
                className="icon-image"
              />
              <span className="social-label">Statement</span>
            </a>            
          </div>
        </div>
      </div>
      
      <div className="about-right">
        {/* <h1 className="about-name">Vaishnavi Lokhande</h1> */}
<div className="about-text">
    Hi, I am <b>Vaishnavi Lokhande!</b> I am currently an undergraduate researcher in the department of <a className="abt_a" target="_blank" rel="noopener noreferrer" href="https://engineering.buffalo.edu/computer-science-engineering.html">Computer Science and Engineering</a> at the <a className="abt_a" target="_blank" rel="noopener noreferrer" href="https://www.buffalo.edu/">University at Buffalo</a>, supported by the University at Buffalo <b>Transfer Scholarship</b>. I spent the first two years of my undergraduate studies at the lovely <a className="abt_a" target="_blank" rel="noopener noreferrer" href="https://faculty.engineering.asu.edu/directory/scai/computer-science-and-engineering/">Arizona State University</a>, where I was supported by the <a className="abt_a" target="_blank" rel="noopener noreferrer" href="https://tuition.asu.edu/new-american-university">NAMU Scholarship</a> and an <a className="abt_a" target="_blank" rel="noopener noreferrer" href="https://students.engineering.asu.edu/scholarships-funding/experiential-learning-grant/">Experiential Learning Grant</a>. I have also been recognized on the <b>Dean’s List</b> for five consecutive semesters and was the <b>School Valedictorian</b> at Rosary Convent High School. My academic journey has been shaped by a passion for building AI systems that recover intent and meaning from incomplete, inconsistent, or noisy information.  
    I am excited about:
    <ul className="notes-list">
        <li>
            <b>AI for Healthcare:</b>
            <br/> 
            How can AI systems reason over clinical narratives, patient-reported outcomes, and sensor data to better understand post-discharge recovery, infer context that is missing or ambiguous, and provide meaningful support to patients and clinicians?
        </li>
        <li>
            <b>AI for Software Engineering:</b>
            <br/>
            How can AI reason across evolving software artifacts, such as requirements, code, and tests, to detect conflicts, recover intended behavior, and propose repairs when information is incomplete or inconsistent?
        </li>
    </ul>
I have complemented my research with teaching and leadership activities. As an <b>Undergraduate Teaching Assistant</b> for CSE 115, CSE 412, and FSE 100, I help students build programming fundamentals and problem-solving confidence. I serve as <b>Sponsorship Lead</b> for <a class="abt_a" target="_blank" rel="noopener noreferrer" href="https://ubhacking.cse.buffalo.edu/">UB Hacking</a>, <b>Co-Chair / Public Relations Chair</b> of the <a class="abt_a" target="_blank" rel="noopener noreferrer" href="https://ubacm.org/">ACM UB Chapter</a>, and am an active member of <a class="abt_a" target="_blank" rel="noopener noreferrer" href="#">Women in Computing (WiCS)</a>. These experiences have strengthened my ability to explain complex ideas clearly and reinforced my interest in pursuing a career that combines research, teaching, and leadership.
</div>



        {/* <div className="about-text">
            Hi, I'm Simran. I recently finished my PhD in Computer Science at Stanford, where I was advised by <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs.stanford.edu/~chrismre/#news">Chris Ré</a> and part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://hazyresearch.stanford.edu/">Hazy Research Lab</a>. My PhD was generously supported by a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow. I'm now an incoming assistant professor at Caltech CMS and a Principal Scientist at Together AI.
            I am also an advisor to <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cartesia.ai/">Cartesia AI</a>. I work on building AI systems and I'm excited about:
            <ul className="notes-list">
            <li>
            <p>
            <b>How do we help AI developers trade off quality, memory, and compute in principled ways?</b>
            <br/><a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2312.04927">Zoology</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.together.ai/blog/based">Based</a> on memory-quality tradeoffs
            <br/>
            <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2407.05483">JRT</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-06-08-cartridges">Cartridges</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">AMA</a> on compute-quality tradeoffs
            </p>
            </li>
            <li>
            <b>We want more AI in the world. How do we make it easier to use AI across the wide range of hardware platforms and enable a multi-silicon AI future? </b>
            <br/>
            <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://github.com/HazyResearch/ThunderKittens">ThunderKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-11-09-hk">HipKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-11-17-pk">ParallelKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles">Megakernels</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2502.10517">KernelBench</a> to simplify the process of learning about and implementing peak performance AI kernels.
            </li>
            <li>
            <b>How do we get AI to work on our personal data, and learn from our personal experiences and expertise?</b>
            <br/> 
            <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">AMA</a> small model test-time scaling for <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2205.13722">local AI</a>
            <br/>
            <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00580/117168">Split QA</a> non-parametric LLMs for siloed public and private data  
            </li>
            </ul>
            I created and taught Stanford's <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs229s.stanford.edu/fall2023/">systems for machine learning (CS 229s)</a> course in Fall 2023. I've released the slides.<br/><br/>
            </div> */}
      </div>
    </div>
    </div>
  );
};
export default About;

