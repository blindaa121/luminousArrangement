import DonutChart from './DonutChart';
import { connect } from 'react-redux';
import * as riskActions from '../../redux/risk_actions'

const mapStateToProps = (state) => ({
    selectedLevel: state.selectedLevel,
    level: state.selectedLevel.level,
    bondPercentage: state.selectedLevel.bonds,
    largeCapPercentage: state.selectedLevel.largeCap,
    midCapPercentage: state.selectedLevel.midCap,
    foreignPercentage: state.selectedLevel.foreign,
    smallCapPercentage: state.selectedLevel.smallCap  
})

const mapDispatchToProps = dispatch => ({
    selectRiskOne: () => dispatch(riskActions.selectRiskOne()),
    selectRiskTwo: () => dispatch(riskActions.selectRiskTwo()),
    selectRiskThree: () => dispatch(riskActions.selectRiskThree()),
    selectRiskFour: () => dispatch(riskActions.selectRiskFour()),
    selectRiskFive: () => dispatch(riskActions.selectRiskFive()),
    selectRiskSix: () => dispatch(riskActions.selectRiskSix()),
    selectRiskSeven: () => dispatch(riskActions.selectRiskSeven()),
    selectRiskEight: () => dispatch(riskActions.selectRiskEight()),
    selectRiskNine: () => dispatch(riskActions.selectRiskNine()),
    selectRiskTen: () => dispatch(riskActions.selectRiskTen()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DonutChart)