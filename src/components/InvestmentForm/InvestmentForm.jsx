import React from 'react';
import './InvestmentForm.css'
import * as moneyAlgorithm from '../../AllocationAlgorithm';
import Portfolio from '../Portfolio/Portfolio'

class InvestmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        bonds: '',
        largeCap: '',
        midCap: '',
        smallCap: '',
        foreign: ''
      },
      validInput: true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.renderPortfolio = this.renderPortfolio.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput(dollarAmounts) {
    const amounts = Object.values(dollarAmounts);
    for (const amount of amounts) {
      if (amount < 0) return false;
    }

    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { bonds, largeCap, midCap, smallCap, foreign } = this.props.selectedLevel;
    const riskPercentages = [bonds, largeCap, midCap, smallCap, foreign];
    const isValid = this.validateInput(this.state.input);

    if (isValid) {
      const { input } = this.state
      const recommendedAmount = moneyAlgorithm.getRecommendedAmount(input, riskPercentages);
      const messages = moneyAlgorithm.getRecommendedMessages(input, riskPercentages);
      const recommendationObj = {
        bonds: {
            type: 'Bonds', 
            ogAmount: input.bonds, 
            recAmount: recommendedAmount.bonds
        },
        largeCap: {
            type: 'Large Cap', 
            ogAmount: input.largeCap, 
            recAmount: recommendedAmount.largeCap
        },
        midCap: {
            type: 'Mid Cap', 
            ogAmount: input.midCap, 
            recAmount: recommendedAmount.midCap
        },
        smallCap: {
            type: 'Small Cap', 
            ogAmount: input.smallCap, 
            recAmount: recommendedAmount.smallCap
        },  
        foreign: {
            type: 'Foreign', 
            ogAmount: input.foreign, 
            recAmount: recommendedAmount.foreign
        }
      }
      this.props.receiveRecommendation(recommendationObj);
      this.props.receiveMessages(messages);
      this.setState({validInput: true})
    } else {
      this.setState({validInput: false})
    }
  }

  updateField(field) {
    return e => this.setState({
      input: { ...this.state.input, [field]: e.currentTarget.value}
    });
  }


  renderSelectedLevel() {
    // if (!this.props.selectedLevel) return null;
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
        <div className="portfolio-container">
          <Portfolio 
            allocationMessages={this.props.allocationMessages}
            recommendation={this.props.recommendation}/>
        </div> 
      )
    }
  }

  renderPortfolioHeader() {
    if (!this.props.recommendation.length) {
      return 'Your recommended portfolio awaits!'
    } else {
      return 'Here is your recommended portfolio'
    }
  }

  setFormHeaderClass() {
    if (!Object.keys(this.props.selectedLevel).length) {
      return 'select-risk'
    } else if (!this.state.validInput){
      return 'invalid-input' 
    } else {
      return ''
    }
  }

  renderFormHeader() {
    if (!Object.keys(this.props.selectedLevel).length) {
      return 'Please select a risk level before proceeding'
    } else if (!this.state.validInput){
      return 'Please enter positive amounts only'
    } else {
      return 'Please enter dollar amount'
    }
  }

  renderButtonType() {
    if (!Object.keys(this.props.selectedLevel).length) {
      return (
        <input
          onClick={() => this.scrollDown()}
          id="submit-btn"
          type="submit"
          value="SUBMIT"
          disabled
        />
      )
    } else {
      return (
        <input
          onClick={() => this.scrollDown()}
          id="submit-btn"
          type="submit"
          value="SUBMIT" 
        />
      )
    }
  }

  scrollDown() {
    setTimeout(() => {
      window.scrollTo({
        top: 2600,
        behavior: 'smooth'
      });
    }, 1000);
  }

  render() {
    return (
      <div className="investment-form-container">
        <h1>How would you like to allocate your money?</h1>
          {this.renderSelectedLevel()}
        <form onSubmit={this.handleSubmit} className="investment-form">
          <h1 className={this.setFormHeaderClass()}>{this.renderFormHeader()}</h1>
          <div className="investment-input">
            <div className="investment-input-content">
              <label className="investment-form-title">Bonds
              <br/>
                <input
                  type="number"
                  onChange={this.updateField('bonds')}
                  value={this.state.bonds}
                  placeholder="$0"
                />
              </label>
            </div>
            <div className="investment-input-content">
              <label className="investment-form-title">Large Cap
              <br/>
                <input
                  type="number"
                  onChange={this.updateField('largeCap')}
                  value={this.state.largeCap}
                  placeholder="$0"
                />
              </label>
            </div>
            <div className="investment-input-content">
              <label className="investment-form-title">Mid Cap
              <br/>
                <input
                  type="number"
                  onChange={this.updateField('midCap')}
                  value={this.state.midCap}
                  placeholder="$0"
                  />
              </label>
            </div>
            <div className="investment-input-content">
              <label className="investment-form-title">Small Cap
              <br/>
                <input
                  type="number"
                  onChange={this.updateField('smallCap')}
                  value={this.state.smallCap}
                  placeholder="$0"
                  />
              </label>
            </div>
            <div className="investment-input-content">
              <label className="investment-form-title">Foreign
              <br/>
                <input
                  type="number"
                  onChange={this.updateField('foreign')}
                  value={this.state.foreign}
                  placeholder="$0"
                  />
              </label>
            </div>
          </div>
          {this.renderButtonType()}
        </form>
        <h1 className="portfolio-header">{this.renderPortfolioHeader()}</h1>
        {this.renderPortfolio()}
      </div>
    )
  }
}

export default InvestmentForm;