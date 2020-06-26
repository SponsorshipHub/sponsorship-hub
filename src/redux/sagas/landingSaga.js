import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga
function* landingSaga(){
    yield takeLatest('FETCH_LANDING', getLanding);
    yield takeLatest('FETCH_RESULTS', getResults);
    yield takeLatest('FETCH_DEFAULT_RESULTS', getDefaultResults);
    yield takeLatest('FETCH_ADV_RESULTS', getAdvResults);
    yield takeLatest('FETCH_EVENT_TYPES', eventTypes);
};//end landingSaga

// generator functions
// this function controls the GET for the landing page featured events
function* getLanding(){
    // console.log('---------------> in fetchLanding saga');
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

//this function gets the default results for the page
function* getDefaultResults(){
    // console.log('--------> in getDefaultResults saga');
    try{
        const response = yield axios.get('/results');
        yield put({
            type: 'GET_DEFAULT_RESULTS',
            payload: response.data
        })
    }catch(err){
        console.log('Error in defaultResults saga:', err)
    }
};//end getDefaultResults

//this function handles the results page on search from the landing page
function* getResults(action){
    let startD = action.payload.startDate;
    let endD = action.payload.endDate;
    let state = action.payload.state
    // console.log('-------------> in getResults saga', action.payload);
    try{
        //send GET request for /results and send to our reducer
        const response = yield axios.get(`/results/${state}/${startD}/${endD}`);
        yield put({
            type: 'GET_RESULTS',
            payload: response.data
        })
    }catch(err){
        console.log('Error in getResults saga');
    }
};//end getResults

//this function handles the advanced search from the results view page
function* getAdvResults(action){
    let state = action.payload.state;
    let startD = action.payload.startD;
    let endD = action.payload.endD;
    let type = action.payload.type;
    let minAttend = action.payload.minAttend;
    let maxAttend = action.payload.maxAttend;
    let minSponsorPrice = action.payload.minSponsorPrice;
    let maxSponsorPrice = action.payload.maxSponsorPrice;
    console.log('----------> in getAdvResults', action.payload);
    try{   
        // const response = yield axios.get(`/results/${state}/${startD}/${endD}/${type}/${minAttend}/${maxAttend}/${minSponsorPrice}/${maxSponsorPrice}`);
        const response = yield axios.get(`/results/filter`, { params: {
            state, startD, endD, type, minAttend, maxAttend, minSponsorPrice, maxSponsorPrice
        }})
        yield put({
            type: 'GET_ADV_RESULTS',
            payload: response.data
        })
    }catch(err){
        console.log('Error in getAdvResults saga')
    }
};//end getAdvResults

// this function gets our event types so we can map through our event type selectors
function* eventTypes(){
    try{
        const response = yield axios.get(`/landing/event-types`);
        yield put({
            type: 'GET_EVENT_TYPES',
            payload: response.data
        })
    }catch(err){
        console.log('error in getting event types:', err)
    }
};//end eventTypes

export default landingSaga;