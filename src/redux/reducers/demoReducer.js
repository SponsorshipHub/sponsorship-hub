const demoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DEMO':
            console.log('in demoReducer', action.payload);

            return action.payload;
        case 'UNSET_DEMO':
            return {};
        default:
            return state;
    }
};

// sponsors will be on the redux state at:
// state.demographics
export default demoReducer;