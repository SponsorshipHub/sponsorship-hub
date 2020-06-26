import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* demoSaga(){
    yield takeLatest('ADD_DEMO', sendDemo);
}

//The Demographic POST
function* sendDemo(action){
    console.log('in sendDemo', action.payload );
    try{
        yield axios.post(`/demo/gender`, action.payload);
        yield axios.post(`/demo/income`, action.payload);
        yield axios.post(`/demo/age`, action.payload);
        yield axios.post(`/demo/resident`, action.payload);
        yield action.history.push(`/event/${action.payload.id}`)
//may need to add a FETCH call here if we want to review and edit
    }catch(error){
        console.log('add demo failed', error);
        
    }
}

export default demoSaga;