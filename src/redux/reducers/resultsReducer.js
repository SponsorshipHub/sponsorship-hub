const results = (state = [], action) => {
    console.log('---------> in resultsReducer');
    // get data for results page
    if (action.type === 'GET_RESULTS') {
        return action.payload;
    }
    return state;
};//end results

export default results;