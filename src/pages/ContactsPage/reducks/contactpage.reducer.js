import * as contactModel from './contactpage.model'

export default (state = contactModel.initialState, action) => {
    switch (action.type) {
        case contactModel.UPDATE_CONTACTS_SUCCESSFUL:
            return {
                ...state,
                contacts: action.payload.updatedContacts,
            }
        default:
            return state;
    }
}
