import * as contactModel from './contactpage.model.js'

export const updateContacts = (contactsData) => ({
    type: contactModel.UPDATE_CONTACTS_REQUEST,
    payload: {contactsData}
})
