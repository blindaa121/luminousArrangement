import { receiveRecommendation } from '../../redux/actions/recommendation_actions';
import { receiveMessages } from '../../redux/actions/allocation_messages_actions';
import { connect } from 'react-redux';
import InvestmentForm from './InvestmentForm';

const mapStateToProps = (state) => ({
    recommendations: state.recommendations,
    allocationMessages: state.allocationMessages
})

const mapDispatchToProps = dispatch => ({
    receiveRecommendation: (recommendation) => dispatch(receiveRecommendation(recommendation)),
    receiveMessages: (messages) => dispatch(receiveMessages(messages))
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentForm)