import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../reducks/contactpage.creators'
import ContactsPage from '../../../components/ContactsPage'

const mapStateToProps = state => ({
    contacts: state.contactpage.contacts,
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)