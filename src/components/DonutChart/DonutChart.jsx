import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class DonutChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ['Bonds', 'Large Cap', 'Mid Cap', 'Foreign', 'Small Cap'],
            datasets: [
                {
                    label: 'Rainfall',
                    backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
                    hoverBackgroundColor: [ '#501800', '#4B5000', '#175000', '#003350', '#35014F'],
                    data: [80,20,0,0,0]
                }
            ]
        }

        // this.setPercentages = this.setPercentages.bind(this);
    }

    setPercentages() {
        if (this.props.selectedLevel) {
            const {
                bondPercentage,
                largeCapPercentage,
                midCapPercentage,
                foreignPercentage,
                smallCapPercentage
            } = this.props;

            this.setState({
                datasets: [
                    {
                        label: 'Rainfall',
                        backgroundColor: [
                            '#B21F00',
                            '#C9DE00',
                            '#2FDE00',
                            '#00A6B4',
                            '#6800B4'
                        ],
                        hoverBackgroundColor: [
                            '#501800',
                            '#4B5000',
                            '#175000',
                            '#003350',
                            '#35014F'
                        ],
                        data: [
                                bondPercentage,
                                largeCapPercentage,
                                midCapPercentage,
                                foreignPercentage,
                                smallCapPercentage
                            ]
                    }
                ]
            })
        } else {
            return [0,0,0,0]
        }
    }
    
    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedLevel !== this.props.selectedLevel) {
            this.setPercentages();
        }
    }

    // handleClick(risk) {
    //     this.props.addRisk
    // }

    render() {
        return(
            <div>
                <h1>Donut Chart goes here</h1>
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

                <Doughnut
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        )
    }
}

export default DonutChart