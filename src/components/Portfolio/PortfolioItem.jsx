import React from 'react';
import './PortfolioItem.css'

const PortfolioItem = ({recommendation}) => {
  const generateId = (recommendation) => {
    switch(recommendation.type) {
      case "Bonds":
        return 'bonds'
      case "Small Cap":
        return 'small-cap'
      case "Mid Cap":
        return 'mid-cap'
      case "Large Cap":
        return 'large-cap'
      case 'Foreign':
        return 'foreign'
    }
  }
  return (
    <div id={generateId(recommendation)} className="portfolio-item">
      <h1>{recommendation.type}</h1>
      <div id="item-current">
        <p>Current amount</p>
        <p>${recommendation.ogAmount}</p>
      </div>
      <div id="item-recommended">
        <p>Recommended amount</p>
        <p>${recommendation.recAmount}</p>
      </div>
    </div>
  )
}

export default PortfolioItem
