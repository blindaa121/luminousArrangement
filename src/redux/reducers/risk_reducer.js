import React from 'react';
import { RECEIVE_LEVEL, RECEIVE_LEVELS } from '../actions/risk_actions'

const _defaultState = {
    selectedLevel: {},
    levels: {}
}

const riskReducer = (oldState = _defaultState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_LEVEL:
            nextState.selectedLevel = action.level;
            return nextState;
        case RECEIVE_LEVELS: 
            nextState.levels = action.levels;
            return nextState;
        default:
            return oldState
    }
}

export default riskReducer;