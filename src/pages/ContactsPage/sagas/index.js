import { call, put,takeLatest, fork, all } from 'redux-saga/effects'
import * as contactModel from '../reducks/contactpage.model'

function* contactSaga(action) {

    if (action.type === contactModel.UPDATE_CONTACTS_REQUEST) {
            let updatedContacts = action.payload.contactsData
            yield put({
                type: contactModel.UPDATE_CONTACTS_SUCCESSFUL,
                payload: {updatedContacts}
            })
    }
}



export default function* rootContactSaga() {
    yield all([
        takeLatest(contactModel.UPDATE_CONTACTS_REQUEST, contactSaga),
    ])
}