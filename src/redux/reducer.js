import React from 'react';
import { ADD_RISK_LEVEL } from './actions'

const _defaultState = {
    selectedLevel: {}
}
const reducer = (oldState = _defaultState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    console.log(nextState)
    switch (action.type) {
        case ADD_RISK_LEVEL:
            return { selectedLevel: action.level }
        default:
            return oldState
    }
}

export default reducer;