// About.js
import React from 'react';
import pic from "../assets/profile.jpg";
import './About.css';
import githubIcon from "../assets/github-brands-solid.svg";
import linkedinIcon from "../assets/linkedin-brands-solid.svg";
import resumeIcon from "../assets/resume-solid.svg";
import statementClipboard from "../assets/statement-clipboard.svg";
import newsData from "../data/news.json";

const About = () => {
  const latest = newsData[0];

  return (
    <div className="page-background">

    {latest && (
      <div className="news-banner">
        <span className="news-banner-pill">News</span>
        <span className="news-banner-text">
          {latest.text}
          {latest.detail && <span className="news-banner-detail"> — {latest.detail}</span>}
        </span>
        <span className="news-banner-date">{latest.date}</span>
      </div>
    )}

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
              href={require("../assets/Vaishnavi_Lokhande_FinalSOP.pdf")}
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
I have complemented my research with teaching and leadership activities. As an <b>Undergraduate Teaching Assistant</b> for CSE 115, CSE 412, and FSE 100, I help students build programming fundamentals and problem-solving confidence. I serve as <b>Sponsorship Lead</b> for <a class="abt_a" target="_blank" rel="noopener noreferrer" href="https://ubhacking.cse.buffalo.edu/">UB Hacking</a>, <b>Co-Chair / Public Relations Chair</b> of the <a class="abt_a" target="_blank" rel="noopener noreferrer" href="https://ubacm.org/">ACM UB Chapter</a>, and am an active member of <a className="abt_a" target="_blank" rel="noopener noreferrer" href="https://students.engineering.asu.edu/clubs/wics/" > Women in Computing (WiCS)</a>. These experiences have strengthened my ability to explain complex ideas clearly and reinforced my interest in pursuing a career that combines research, teaching, and leadership.
</div>
      </div>
    </div>

    <div className="news-feed-section">
      <h2 className="news-feed-title">Latest News</h2>
      <div className="news-feed-list">
        {newsData.map(item => (
          <div className="news-feed-item" key={item.id}>
            <span className="news-feed-date">{item.date}</span>
            <div className="news-feed-body">
              <span className="news-feed-tag">{item.tag}</span>
              <p className="news-feed-text">{item.text}</p>
              {item.detail && <p className="news-feed-detail">{item.detail}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};
export default About;

