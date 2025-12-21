import React from 'react';
import data from "../data/teaching.json"; 
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <div className="section-header">
        <h2 className="Title_research">Teaching</h2>
      </div>
      
      {data.Instructing.map((course, index) => (
        <div key={index} className="course-item">
          <span className="course-title">{course.Title} - {course.Role}</span>
          <span className="course-company">{course.Company}</span>
          <div className="course-links">
            {course.Details.map((detail, idx) => (
              <a 
                key={idx}
                className="course-link"
                target="_blank"
                rel="noopener noreferrer"
                href={detail.detail}
              >
                Course Website
              </a>
            ))}
          </div>
        </div>
      ))}
      
      {/* {data.Teaching.map((course, index) => (
        <div key={index} className="course-item">
          <span className="course-title">{course.Title} - {course.Role}</span>
          <span className="course-company">{course.Company}</span>
          <div className="course-links">
            {course.Details && course.Details.map((detail, idx) => (
              <a 
                key={idx}
                className="course-link"
                target="_blank"
                rel="noopener noreferrer"
                href={detail.detail}
              >
                Course Website
              </a>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Education;