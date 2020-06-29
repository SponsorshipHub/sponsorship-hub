import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* demoSaga(){
    yield takeLatest('ADD_DEMO', sendDemo);
    yield takeLatest("UPDATE_DEMO", putDemo );
}
//The Demographic PUT CALLS
function* putDemo(action) {
    console.log('in put demo', action.payload);
    // let one = `/demo/gender/${action.payload}`;
    // let two = `/demo/income/${action.payload}`;
    // let three = `/demo/age/${action.payload}`;
    // let four = `/demo/resident/${action.payload}`;
    // const request1 = axios.get(one);
    // const request2 = axios.get(two)
    // const request3 = axios.get(three);
    // const request4 = axios.get(four);
    // try{
    //     yield axios.all([request1, request2, request3, request4]).then(axios.spread((...responses) =>
    //     const responseOne = responses[0]
    //     const responseTwo = responses[1]
    //     const responseThree = responses[2]
        // yield action.history.push(`/demo/edit/${action.payload.event_id}`)


    

    //     ))} catch (error){
    //     console.log('Demo GET request failed', error);
        
    // }
    
}

//The Demographic POST
function* sendDemo(action){
    console.log('in sendDemo', action.payload );
    try{
        yield axios.post(`/demo/gender`, action.payload);
        yield axios.post(`/demo/income`, action.payload);
        yield axios.post(`/demo/age`, action.payload);
        yield axios.post(`/demo/resident`, action.payload);
        yield action.history.push(`/event/${action.payload.event_id}`)
    }catch(error){
        console.log('add demo failed', error);
        
    }
}

export default demoSaga;