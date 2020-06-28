import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* demoSaga(){
    yield takeLatest('ADD_DEMO', sendDemo);
    yield takeLatest("FETCH_DEMOGRAPHICS", fetchDemo);
}
//The Demographic GET
function* fetchDemo(action) {
    console.log('in fetch demo', action.payload);
    try{
        const response = yield axios.get(`/demo/${action.payload}`);
        yield put ({ type: 'SET_DEMO', payload: response.data})
        yield action.history.push(`/demo/edit/${action.payload.id}`)
    }catch(error){
        console.log('Demo GET request failed', error);
        
    }
    
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
    }catch(error){
        console.log('add demo failed', error);
        
    }
}

export default demoSaga;