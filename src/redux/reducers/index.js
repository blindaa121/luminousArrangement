import messages from './allocation_messages_reducer';
import recommendation from './recomendation_reducer';
import riskLevel from './risk_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    riskLevel,
    recommendation,
    messages
})