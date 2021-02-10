import {RECEIVE_MESSAGES} from '../actions/allocation_messages_actions';

const messagesReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_MESSAGES:
            return action.payload
        default:
            return oldState
    }
}

export default messagesReducer;