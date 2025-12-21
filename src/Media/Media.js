// Media.js
import React, { Component } from 'react';
import select_data from "../data/select_research.json"; 
import '../Research/Research.css'; // We can reuse the same CSS

class Media extends Component {
  renderContent(path){
    switch(path) {
      default: return '';
    }
  }

  render() {
    return (
      <div className="ResearchContainer">
        <div className="section-header">
          <h2 className="Title_research">Talks</h2>
          <div className="subtitle">More links in CV</div>
        </div>
        
        <div className="papers-container">
          {select_data.Talks.map((talk, index) => {
            return (
              <div key={index} className="paper-container">
                <span className="Talk">{talk.Talk}</span>
                <span className="Talk_details">{talk.Talk_details}</span>
                <div className="details-container">
                  {talk.Details.map((Details, idx) => {
                    const base_url = this.renderContent(Details.key);	
                    return (
                      <a 
                        key={`talk-${idx}`}
                        className="Details" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={base_url}
                      >
                        {Details.detailType}
                      </a>
                    );
                  })}
                  {talk.RemoteDetails.map((Details, idx) => {
                    return (
                      <a 
                        key={`remote-talk-${idx}`}
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

export default Media;