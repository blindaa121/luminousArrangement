import DonutChart from './DonutChart';
import { connect } from 'react-redux';
import * as riskActions from '../../redux/actions'

const mapStateToProps = (state) => ({
    selectedLevel: state.selectedLevel,
    bondPercentage: state.selectedLevel.bonds,
    largeCapPercentage: state.selectedLevel.largeCap,
    midCapPercentage: state.selectedLevel.midCap,
    foreignPercentage: state.selectedLevel.foreign,
    smallCapPercentage: state.selectedLevel.smallCap  
})

const mapDispatchToProps = dispatch => ({
    addRiskOne: () => dispatch(riskActions.addRiskOne()),
    addRiskTwo: () => dispatch(riskActions.addRiskTwo()),
    addRiskThree: () => dispatch(riskActions.addRiskThree()),
    addRiskFour: () => dispatch(riskActions.addRiskFour()),
    addRiskFive: () => dispatch(riskActions.addRiskFive()),
    addRiskSix: () => dispatch(riskActions.addRiskSix()),
    addRiskSeven: () => dispatch(riskActions.addRiskSeven()),
    addRiskEight: () => dispatch(riskActions.addRiskEight()),
    addRiskNine: () => dispatch(riskActions.addRiskNine()),
    addRiskTen: () => dispatch(riskActions.addRiskTen()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DonutChart)