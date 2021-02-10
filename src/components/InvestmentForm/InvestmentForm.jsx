import React from 'react';
import './InvestmentForm.css'
import * as moneyAlgorithm from '../../AllocationAlgorithm';
import Portfolio from '../Portfolio/Portfolio'

class InvestmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bonds: '',
      largeCap: '',
      midCap: '',
      smallCap: '',
      foreign: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.getRecommendedAmount = this.getRecommendedAmount.bind(this);
    this.renderPortfolio = this.renderPortfolio.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { bonds, largeCap, midCap, smallCap, foreign } = this.props.selectedLevel;
    const riskPercentages = [bonds, largeCap, midCap, smallCap, foreign];
    const recommendedAmount = this.getRecommendedAmount(this.state, riskPercentages);
    const messages = moneyAlgorithm.calculateOptimizedAmount(this.state, riskPercentages);
    const recommendationObj = {
      bonds: {
          type: 'Bonds', 
          ogAmount: this.state.bonds, 
          recAmount: recommendedAmount.bonds
      },
      largeCap: {
          type: 'Large Cap', 
          ogAmount: this.state.largeCap, 
          recAmount: recommendedAmount.largeCap
      },
      midCap: {
          type: 'Mid Cap', 
          ogAmount: this.state.midCap, 
          recAmount: recommendedAmount.midCap
      },
      smallCap: {
          type: 'Small Cap', 
          ogAmount: this.state.smallCap, 
          recAmount: recommendedAmount.smallCap
      },  
      foreign: {
          type: 'Foriegn', 
          ogAmount: this.state.foreign, 
          recAmount: recommendedAmount.foreign
      }
    }
    this.props.receiveRecommendation(recommendationObj);
    this.props.receiveMessages(messages)
  }

  updateField(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  getRecommendedAmount(originalAmount, riskPercentages) {
    const optimizedAmounts = { };
    const inputValues = Object.values(originalAmount).map(num => Number(num))
    const length = inputValues.length;
    const total = inputValues.reduce((a, b) => a + b);

    for (let i = 0; i < length; i++) {
      const percentage = (riskPercentages[i] / 100).toFixed(2);
      const optimizedVal = (total * percentage).toFixed(2);
      switch (i) {
        case 0:
            optimizedAmounts['bonds'] = optimizedVal;
        case 1:
            optimizedAmounts['largeCap'] = optimizedVal;
        case 2:
            optimizedAmounts['midCap'] = optimizedVal;
        case 3:
            optimizedAmounts['smallCap'] = optimizedVal;
        case 4:
            optimizedAmounts['foreign'] = optimizedVal;
      }
    }

    return optimizedAmounts;
  }

  renderSelectedLevel() {
    if (!this.props.selectedLevel) return null;
    const { level, bonds, largeCap, midCap, smallCap, foreign } = this.props.selectedLevel;
      
    return (
        <div className="current-selection">
            <div id="current-percentage">
                <h1>Level</h1>
                <p>{level ? level : 'Select a Risk Level'}</p>
            </div>
            <div id="current-percentage">
                <h1>Bonds</h1>
                <p>{bonds ? bonds : 0}%</p>
            </div>
            <div id="current-percentage">
                <h1>Large Cap</h1>
                <p>{largeCap ? largeCap : 0}%</p>
            </div>
            <div id="current-percentage">
                <h1>Mid Cap</h1>
                <p>{midCap ? midCap : 0}%</p>
            </div>
            <div id="current-percentage">
                <h1>Small Cap</h1>
                <p>{smallCap ? smallCap : 0}%</p>
            </div>
            <div id="current-percentage">
                <h1>Foreign</h1>
                <p>{foreign ? foreign : 0}%</p>
            </div>
        </div>
    )
  }

  renderPortfolio() {
    if (!this.props.recommendation.length) {
      return null
    } else {
      return (
        <div>
          <Portfolio 
            allocationMessages={this.props.allocationMessages}
            recommendation={this.props.recommendation}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="investment-form-container">
        <h1>How would you like to allocate your money?</h1>
          {this.renderSelectedLevel()}
        <form onSubmit={this.handleSubmit} className="investment-form">
          <h1>Please enter amount for each category</h1>
          <div className="investment-input">
            <div className="investment-input-content">
              <label className="investment-form-title">Bonds
              <br/>
                <input
                  type="text"
                  onChange={this.updateField('bonds')}
                  value={this.state.bonds}
                  placeholder="0"
                />
              </label>
            </div>
            <div className="investment-input-content">
              <label className="investment-form-title">Large Cap
              <br/>
                <input
                  type="text"
                  onChange={this.updateField('largeCap')}
                  value={this.state.largeCap}
                  placeholder="0"
                />
              </label>
            </div>
            <div className="investment-input-content">
              <label className="investment-form-title">Mid Cap
              <br/>
                <input
                  type="text"
                  onChange={this.updateField('midCap')}
                  value={this.state.midCap}
                  placeholder="0"
                  />
              </label>
            </div>
            <div className="investment-input-content">
              <label className="investment-form-title">Small Cap
              <br/>
                <input
                  type="text"
                  onChange={this.updateField('smallCap')}
                  value={this.state.smallCap}
                  placeholder="0"
                  />
              </label>
            </div>
            <div className="investment-input-content">
              <label className="investment-form-title">Foreign
              <br/>
                <input
                  type="text"
                  onChange={this.updateField('foreign')}
                  value={this.state.foreign}
                  placeholder="0"
                  />
              </label>
            </div>
          </div>
          <input id="submit-btn" type="submit" value="SUBMIT"/>
        </form>
        {this.renderPortfolio()}
      </div>
    )
  }
}

export default InvestmentForm;