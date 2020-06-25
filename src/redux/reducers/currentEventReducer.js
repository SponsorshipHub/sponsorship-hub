// Reducer for GET current event - Utilized by CreateEvent.jsx
// LOOK INTO DELETING??


const currentEventReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_EVENT':
            console.log('Action.Payload in Reducer is:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

export default currentEventReducer;