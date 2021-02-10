import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './DonutChart.css'
import InvestmentFormContainer from '../InvestmentForm/InvestmentFormContainer'

class DonutChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: ['Bonds', 'Large Cap', 'Mid Cap', 'Foreign', 'Small Cap'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: ['#F8D525', '#386FA4', '#59A5D8', '#84D2F6', '#133C55'],
          hoverBackgroundColor: ['#DAB707', '#184563', '#24496A', '#2B7EB6', '#184563'],
          data: [80,20,0,0,0]
        }
      ]
    }
  }

  updateDonut() {
    if (this.props.selectedLevel) {
      const {
          bondPercentage,
          largeCapPercentage,
          midCapPercentage,
          foreignPercentage,
          smallCapPercentage
      } = this.props;

      const bgColor = ['#F8D525', '#386FA4', '#59A5D8', '#84D2F6', '#133C55'];
      const hoverColor = ['#DAB707', '#184563', '#24496A', '#2B7EB6', '#184563'];
      const data = [
        bondPercentage,
        largeCapPercentage,
        midCapPercentage,
        foreignPercentage,
        smallCapPercentage
      ];

      this.setState({
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: bgColor,
            hoverBackgroundColor: hoverColor,
            data
          }
        ]
      });
      
    } 
  }

  componentDidUpdate(prevProps) {
      if (prevProps.selectedLevel !== this.props.selectedLevel) {
          this.updateDonut();
      }
  }

  render() {
    const donutOptions = {
      title: {
        display: true,
        text: 'Investment Portfolio',
        fontSize: 20
      },
      legend: {
        display: true,
        position: 'top'
      },
      animation: {
        animateScale: true,
      },
      tooltips: {
        titleFontSize: 30
      }
    }
    return(
      <div className="">
        <div className="selection-container">
          <h1>Please select a risk level for your investment portfolio</h1>
          <div className="selection-risk">
            <div className="selection-risk-level">
              <span id="low-risk">Low</span>
              <span id="high-risk">High</span>
            </div>
            <div className="gradient-border"></div>
            <div className="button-container">
              <button onClick={() => this.props.selectRiskOne()}>1</button>
              <button onClick={() => this.props.selectRiskTwo()}>2</button>
              <button onClick={() => this.props.selectRiskThree()}>3</button>
              <button onClick={() => this.props.selectRiskFour()}>4</button>
              <button onClick={() => this.props.selectRiskFive()}>5</button>
              <button onClick={() => this.props.selectRiskSix()}>6</button>
              <button onClick={() => this.props.selectRiskSeven()}>7</button>
              <button onClick={() => this.props.selectRiskEight()}>8</button>
              <button onClick={() => this.props.selectRiskNine()}>9</button>
              <button onClick={() => this.props.selectRiskTen()}>10</button>
            </div>
          </div>
          <Doughnut id='chart-area' data={this.state} options={donutOptions} />
        </div>
        <InvestmentFormContainer selectedLevel={this.props.selectedLevel} />
      </div>
    )
  }
}

export default DonutChart