// UPDATE_EVENT
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateEventSaga() {
    yield takeLatest('UPDATE_EVENT', updateEvent);
}

function* updateEvent(action) {
    try {
        let venue_id = action.payload.venue_id;
        // console.log('Venue has ID of:', venue_id)
        if (venue_id === 0) {
            // console.log('Creating new venue...')
            const responseVenue = yield axios.post(`/venue/create`, action.payload)
            venue_id = responseVenue.data.id;
            console.log('New venue has ID of:', venue_id)
        }
        console.log(`updateEvent has received:`, action.payload);
        yield axios.put(`/event/update/${venue_id}`, action.payload);
    } catch (error) {
        console.log(`Error in updateEventSaga:`, error);
    }
}

export default updateEventSaga;