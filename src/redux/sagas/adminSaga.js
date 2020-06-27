import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* adminSaga(){
    yield takeLatest('FETCH_USER_LIST', fetchUserList);
}

function* fetchUserList(action){
    try{
        const res = yield axios.get('/admin/users');
        yield put({type:'SET_USER_LIST', payload: res.data});
        
    }catch(err){
        console.log(`ERROR in ADMIN SAGA:`, err);
    }
}

export default adminSaga;