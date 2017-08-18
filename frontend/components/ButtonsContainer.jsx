import { connect } from 'react-redux'
import Actions from '../actions'
import Buttons from './buttons'
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

const ButtonsContainer = connect(
  null,
  mapDispatchToProps
)(Buttons)

export default ButtonsContainer
