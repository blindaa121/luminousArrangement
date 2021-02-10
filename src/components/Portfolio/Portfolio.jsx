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
    </div>
  )
}

export default Portfolio

