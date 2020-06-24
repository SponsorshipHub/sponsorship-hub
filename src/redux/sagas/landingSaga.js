import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga
function* landingSaga(){
    yield takeLatest('FETCH_LANDING', getLanding);
    yield takeLatest('FETCH_RESULTS', getResults);
};//end landingSaga

// generator functions
// this function controls the GET for the landing page featured events
function* getLanding(){
    console.log('---------------> in fetchLanding saga');
    try{
        //send GET request for /landing and send to our reducer
        const response = yield axios.get(`/landing`);
        yield put({
            type: 'GET_LANDING',
            payload: response.data
        })
    }catch(err){
        console.log('Error in landing saga:', err)
    };//end try
};//end getLanding

//this function handles the results page on search from the landing page
function* getResults(action){
    let startD = action.payload.startDate;
    let endD = action.payload.endDate;
    let location = action.payload.location
    console.log('-------------> in getResults saga', action.payload);
    try{
        //send GET request for /results and send to our reducer
        const response = yield axios.get(`/results/${location}/${startD}/${endD}`);
        yield put({
            type: 'GET_RESULTS',
            payload: response.data
        })
    }catch(err){
        console.log('Error in getResults saga');
    }
};//end getResults

export default landingSaga;