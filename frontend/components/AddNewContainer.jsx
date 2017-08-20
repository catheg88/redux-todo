import { connect } from 'react-redux'
import Actions from '../actions'
import AddNew from './AddNew'
import Store from '../store'

const mapDispatchToProps = ( dispatch ) => {
  return {
    reset: () => dispatch({
      type: Actions.RESET
    }),
    add: (text) => {
      return (dispatch({
      type: Actions.ADD_TODO,
      todo: {
        text: text,
        completed: false
      }
    }))}
  }
}

const AddNewContainer = connect(
  null,
  mapDispatchToProps
)(AddNew)

export default AddNewContainer
