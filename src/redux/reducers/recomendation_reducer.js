import {RECEIVE_RECOMMENDATION} from '../actions/recommendation_actions';

const _defaultState = {
    bonds: {},
    largeCap: {},
    midCap: {},
    smallCap: {},
    foreign: {}
}

const recommendationReducer = (oldState = _defaultState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RECOMMENDATION:
            return action.payload
        default:
            return oldState
    }
}

export default recommendationReducer