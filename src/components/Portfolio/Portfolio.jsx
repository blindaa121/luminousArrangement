import React from 'react';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css'

const Portfolio = ({allocationMessages, recommendation}) => {
  const renderPortfolioItems = (recommendation) => {
    return (
      <div className="portfolio-items-container">
        {recommendation.map((rec, idx) => {
          return <PortfolioItem recommendation={rec} />
        })}
      </div>
    )
  }
  return (
    <div className="portfolio-container">
      {renderPortfolioItems(recommendation)}
      <h1 className="messages-header">Our Lumineers highly recommend that you...</h1>
      <div className="portfolio-messages">
        {allocationMessages.map(message => {
          return (
            <div className="message-content">
              <img className="avatar-img" src="avatar.png" alt="avatar"/>
              <div className="speech-bubble">
                {message}
              </div> 
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio

