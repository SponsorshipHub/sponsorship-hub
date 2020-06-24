import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sponsorSaga() {
    yield takeLatest('FETCH_SPONSOR', fetchSponsor);
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


export default sponsorSaga;