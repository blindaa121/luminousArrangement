import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './DonutChart.css'

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
      })
    } 
  }
  
  componentDidMount() {
    
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
              <span>Low</span>
              <span>High</span>
            </div>
            <div className="button-container">
              <button onClick={() => this.props.addRiskOne()}>1</button>
              <button onClick={() => this.props.addRiskTwo()}>2</button>
              <button onClick={() => this.props.addRiskThree()}>3</button>
              <button onClick={() => this.props.addRiskFour()}>4</button>
              <button onClick={() => this.props.addRiskFive()}>5</button>
              <button onClick={() => this.props.addRiskSix()}>6</button>
              <button onClick={() => this.props.addRiskSeven()}>7</button>
              <button onClick={() => this.props.addRiskEight()}>8</button>
              <button onClick={() => this.props.addRiskNine()}>9</button>
              <button onClick={() => this.props.addRiskTen()}>10</button>
            </div>
          </div>
          <Doughnut id='chart-area' data={this.state} options={donutOptions} />
        </div>

        
      </div>
    )
  }
}

export default DonutChart