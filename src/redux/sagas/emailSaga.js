import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* emailSaga(){
    yield takeLatest('SEND_EMAIL', email);
};//end emailSaga

function* email(action){
    console.log('---------------------> success sending email saga', action.payload);
    try{
        yield axios.post('/api/email', action.payload);
    }catch(err){
        console.log('Error sending email after registration!', err);
    }
};//end email

export default emailSaga;