import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sponsorSaga() {
    yield takeLatest('FETCH_SPONSORS', fetchSponsor);
    yield takeLatest('ADD_SPONSOR', sendSponsor);
    yield takeLatest('DELETE', deleteSponsor);
}
function* deleteSponsor(action){
    console.log("in deleteSponsor", action.payload);
    //DELETE stuff goes here.
}

function* fetchSponsor(action) {
    console.log('in fetch sponsors', action.payload);
    try{
        const response = yield axios.get(`/sponsor/${action.payload}`);
        yield put({type: 'SET_SPONSORS', payload: response.data});
    }catch(error){
        console.log('Sponsor GET request failed', error);

    }
}

function* sendSponsor(action){
    console.log('in addWeek', action.payload);
    try{
        yield axios.post('/sponsor', action.payload);
        yield put ({ type: 'FETCH_SPONSORS', payload: action.payload});
    }catch(error){
        console.log('add sponsor failed', error);
        
    }
    
}


export default sponsorSaga;