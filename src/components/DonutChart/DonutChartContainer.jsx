import DonutChart from './DonutChart';
import { connect } from 'react-redux';
import {
    addRiskOne,
    addRiskTwo,
    addRiskThree,
    addRiskFour,
    addRiskFive,
    addRiskSix,
    addRiskSeven,
    addRiskEight,
    addRiskNine,
    addRiskTen
} from '../../redux/actions'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        selectedLevel: state.selectedLevel,
        bondPercentage: state.selectedLevel.bonds,
        largeCapPercentage: state.selectedLevel.largeCap,
        midCapPercentage: state.selectedLevel.midCap,
        foreignPercentage: state.selectedLevel.foreign,
        smallCapPercentage: state.selectedLevel.smallCap
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRiskOne: () => dispatch(addRiskOne()),
        addRiskTwo: () => dispatch(addRiskTwo()),
        addRiskThree: () => dispatch(addRiskThree()),
        addRiskFour: () => dispatch(addRiskFour()),
        addRiskFive: () => dispatch(addRiskFive()),
        addRiskSix: () => dispatch(addRiskSix()),
        addRiskSeven: () => dispatch(addRiskSeven()),
        addRiskEight: () => dispatch(addRiskEight()),
        addRiskNine: () => dispatch(addRiskNine()),
        addRiskTen: () => dispatch(addRiskTen()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonutChart)