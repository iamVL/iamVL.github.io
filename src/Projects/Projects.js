import React, { Component } from 'react';
import select_data from "../data/select_research.json";
import './Projects.css';

class Projects extends Component {

  render() {
    return (
      <div className="ResearchContainer">
        <div className="section-header">
          <h2 className="Title_research">Projects</h2>
        </div>
        
        <div className="papers-container">
          {select_data.Research.map((project, index) => { 
            return (
              <div key={index} className="paper-container">
                <span className="PaperTitle">{project.Title}</span>
                {/* <span className="Authors">{project.Authors}</span> */}
                {/* <span className="Venue">{project.Venue}</span> */}
                <span className="Description">{project.Description}</span>
                <div className="details-container">
                  {project.Details.map((Details, idx) => {
                    return (
                      <a 
                        key={`remote-${idx}`}
                        className="Details" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={Details.detail}
                      >
                        {Details.detailType}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
} 

export default Projects;