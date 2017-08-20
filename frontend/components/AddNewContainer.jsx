import { connect } from 'react-redux'
import Actions from '../actions'
import AddNew from './AddNew'
import Store from '../store'

const mapDispatchToProps = ( dispatch ) => {
  return {
    reset: () => dispatch( Actions.RESET() ),
    add: text => dispatch( Actions.ADD_TODO(text) )
  }
}

const AddNewContainer = connect(
  null,
  mapDispatchToProps
)(AddNew)

export default AddNewContainer
