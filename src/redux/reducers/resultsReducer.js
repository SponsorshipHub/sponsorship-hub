const results = (state = [], action) => {
    console.log('---------> in resultsReducer');
    // GET default data for results page 
    if (action.type === 'GET_DEFAULT_RESULTS'){
        return action.payload;
    }
    //GET results from landing page search
    else if (action.type === 'GET_RESULTS') {
        return action.payload;
    }
    // GET results for adv search
    return state;
};//end results

export default results;