

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// postEventSaga creates one venue and one event and returns the new event's id for future use

function* postEventSaga() {
    yield takeLatest('POST_EVENT', postEvent);
}

function* postEvent(action) {
    try {
        console.log('postEventSaga.js', action.payload)
        // Create Venue First
        let venue_id = action.payload.venue_id;
        // console.log('Venue has ID of:', venue_id)
            if (venue_id === 0) { 
                // console.log('Creating new venue...')
                const responseVenue = yield axios.post(`/venue/create`, action.payload)
                venue_id = responseVenue.data.id;
                console.log('New venue has ID of:', venue_id)
                }
        // Create Event Next using venue id as :id
        const responseEvent = yield axios.post(`/event/create/${venue_id}`, action.payload)
        let event_id = responseEvent.data.id;
        // console.log ('New Event has an ID of:', event_id)
        yield put({ type: 'SET_CURRENT_EVENT', payload: event_id });
        yield action.history.push(`/create-sponsor/${event_id}`)
    } catch (err) {
        console.log(`ERROR in FETCH ONE EVENT saga:`, err);
    }
}

export default postEventSaga;
