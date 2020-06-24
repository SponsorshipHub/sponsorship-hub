const landingReducer = (state = [], action) => {
    console.log('---------> in landingReducer');
    if(action.type === 'GET_LANDING'){
        return action.payload;
    };//end if statement
    return state;
};//end landingReducer

export default landingReducer;