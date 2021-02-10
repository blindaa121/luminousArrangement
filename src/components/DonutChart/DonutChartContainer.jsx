import DonutChart from './DonutChart';
import { connect } from 'react-redux';
import * as riskActions from '../../redux/actions/risk_actions'


const mapStateToProps = (state) => ({
    selectedLevel: state.riskLevel.selectedLevel,
    level: state.riskLevel.selectedLevel.level,
    bondPercentage: state.riskLevel.selectedLevel.bonds,
    largeCapPercentage: state.riskLevel.selectedLevel.largeCap,
    midCapPercentage: state.riskLevel.selectedLevel.midCap,
    foreignPercentage: state.riskLevel.selectedLevel.foreign,
    smallCapPercentage: state.riskLevel.selectedLevel.smallCap  
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