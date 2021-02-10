import {RECEIVE_RECOMMENDATION} from '../actions/recommendation_actions';

const recommendationReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RECOMMENDATION:
            return action.payload
        default:
            return oldState
    }
}

export default recommendationReducer