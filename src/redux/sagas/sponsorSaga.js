import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sponsorSaga() {
    yield takeLatest('FETCH_SPONSORS', fetchSponsor);
    yield takeLatest('ADD_SPONSOR', sendSponsor);
    yield takeLatest('DELETE_SPONSOR', deleteSponsor);
    yield takeLatest('EDIT_SPONSOR', editSponsor);
}

//THE DELETE ROUTE
function* deleteSponsor(action){
    console.log("in deleteSponsor", action.payload);
    try{
        yield axios.delete(`/sponsor/${action.payload.id}`);
        yield put ({ type: 'FETCH_SPONSORS', payload: action.payload.event_id});
    }catch(error){
        console.log('DELETE failed', error); 
    }
}
//THE PUT ROUTE
function* editSponsor(action){
    console.log('in editSponsor', action.payload );
    try{
        yield axios.put(`/sponsor/edit`, action.payload);
   yield put ({type: 'FETCH_SPONSORS', payload: action.payload});
    }catch(error){
        console.log('editSponsor failed/', error);
        
    }
    

}
//The GET ROUTE
function* fetchSponsor(action) {
    console.log('in fetch sponsors', action.payload);
    try{
        const response = yield axios.get(`/sponsor/${action.payload}`);
        yield put({type: 'SET_SPONSORS', payload: response.data});
    }catch(error){
        console.log('Sponsor GET request failed', error);

    }
}
// the POST ROUTE
function* sendSponsor(action){
    console.log('in sendSponsor', action.payload);
    try{
        yield axios.post('/sponsor', action.payload);
        yield put ({ type: 'FETCH_SPONSORS', payload: action.payload.id});
    }catch(error){
        console.log('add sponsor failed', error);
        
    }
    
}


export default sponsorSaga;