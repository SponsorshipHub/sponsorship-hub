const landing = (state = [], action) => {
    // console.log('---------> in landingReducer');
    // get data for landing page featured events
    if(action.type === 'GET_LANDING'){
        return action.payload;
    }
    return state;
};//end landingReducer

export default landing;