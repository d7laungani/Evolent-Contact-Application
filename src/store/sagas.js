import { fork, all } from 'redux-saga/effects'

import rootContactSaga from '../pages/ContactsPage/sagas'


export default function* rootSagas() {
    yield all([
        fork(rootContactSaga)
    ])
}
