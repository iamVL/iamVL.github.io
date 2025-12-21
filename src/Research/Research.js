import React, { Component } from 'react';
import select_data from "../data/select_research.json"; 
import './Research.css';

class Research extends Component {
  renderContent(path){
    console.log(path)
    switch(path) {
      // case 'grasp': return require("./../assets/grasp_presentation.pdf");  
      // case 'naval': return require("./../assets/naval_presentation.pdf");
      // case 'acl20': return 'https://www.youtube.com/watch?v=bCPeg0Tp64s&feature=youtu.be';
      // case 'p3p': return require("./../assets/p3p_presentation.pdf");
      // case 'metadata': return require("./../assets/Metadata_Shaping.pdf");
      default: return '';
    }
  }

  render() {
    return (
      <div className="ResearchContainer">
        <div className="section-header">
          <h2 className="Title_research">Academic Projects</h2>
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
                  {project.LocalDetails.map((Details, idx) => {
                    const base_url = this.renderContent(Details.detail);  
                    return (
                      <a 
                        key={`local-${idx}`}
                        className="Details" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={base_url}
                      >
                        {Details.detailType}
                      </a>
                    );
                  })}
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

        {/* <h3 className="Title_research">Notes</h3>
      <ul className="notes-list"> 
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2025-11-17-pk">
          ParallelKittens: Simple and Fast Multi-GPU AI Kernels
          </a> (2025)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2025-11-09-hk">
          HipKittens: Fast and Furious AMD Kernels
          </a> (2025)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2025-09-28-tp-llama-intro">
          How Many Llamas Can Dance in the Span of a Kernel?
          </a> (2025)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2025-06-08-cartridges">
          Cartridges: Storing long contexts in tiny caches with self-study
          </a> (2025)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles">
             Look Ma, No Bubbles! Designing a Low-Latency Megakernel for Llama-1B
          </a> (2025)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2025-03-24-based-retro">
            BASED ✌️: our one year retrospective
          </a> (2025)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-06-22-ac">
            Efficient language models as arithmetic circuits
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-11-27-tk-fp8">
          ThunderKittens: Bringing fp8 to theaters near you
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-10-29-tk2">
          Easier, Better, Faster, Cuter
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-05-12-tk">
            GPUs Go Brrr
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-10-14-lolcats-p1">
          Linearizing LLMs with LoLCATs
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-07-01-jrt">
          Just read twice: closing the recall gap for recurrent language models
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-05-20-m2-bert-retrieval">
          Long-Context Retrieval Models with Monarch Mixer
          </a> (2024)
        </li>
        <li>
          <a href="https://www.together.ai/blog/based">
          Based: Simple linear attention language models balance the recall-throughput tradeoff
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2023-07-25-m2-bert">
          Monarch Mixer: Revisiting BERT, Without Attention or MLPs
          </a> (2023)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2023-12-11-zoology0-intro">
          Zoology: Overview
          </a> (2023)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2023-06-08-hyena-safari">
            The Safari of Deep Signal Processing: Hyena and Beyond
          </a> (2023)
        </li>
        <li>
          <a href="https://crfm.stanford.edu/2023/02/18/year-in-review.html">
            Year in Review 2022: Technical Advances, Applications, and Social Responsibility
          </a> (2023)
        </li>
        <li>
          <a href="https://hai.stanford.edu/white-paper-building-national-ai-research-resource">
            Building a National AI Research Resource: A Blueprint for the National Research Cloud
          </a> (2022)
        </li>
        <li>
          <a href="https://arxiv.org/abs/2108.07258">
            On the Opportunities and Risks of Foundation Models
          </a> (2021)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2023-04-18-personalization">
            Ask Me Anything: Leveraging Foundation Models for Private & Personalized Systems
          </a> (2023)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2022-10-11-datacentric-fms">
            Foundation Models are Entering their Data-Centric Era
          </a> (2022)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/what-data-centric-ai-is-not">
            What Data Centric AI is Not
          </a> (2021)
        </li>
      </ul> */}
      </div>
    );
  }
} 

export default Research;