import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* adminSaga(){
    yield takeLatest('FETCH_USER_LIST', fetchUserList);
    yield takeLatest('CHANGE_ACCESS_LEVEL', changeAccessLevel);
}

function* fetchUserList(action){
    try{
        const res = yield axios.get('/admin/users');
        yield put({type:'SET_USER_LIST', payload: res.data});
        
    }catch(err){
        console.log(`ERROR in ADMIN SAGA:`, err);
    }
}


function* changeAccessLevel(action){
    try{
       yield axios.put('/admin/access-level', action.payload);
    }catch(err){
        console.log(`ERROR in ChangeAccessLevel:`, err);
        
    }
}

export default adminSaga;