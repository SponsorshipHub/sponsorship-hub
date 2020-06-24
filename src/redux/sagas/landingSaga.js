import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga
function* landingSaga(){
    yield takeLatest('FETCH_LANDING', getLanding)
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

export default landingSaga;