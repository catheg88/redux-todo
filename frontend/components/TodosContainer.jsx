import { connect } from 'react-redux'
import Todos from './Todos'
import Actions from '../actions'

const mapStateToProps = state => {
  return ({
    todos: state.todos
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    toggleComplete: id => {
      dispatch({
        type: Actions.TOGGLE_TODO,
        id: id
      })
    },
    delete: id => {
      dispatch({
        type: Actions.DELETE_TODO,
        id: id
      })
    }
  })
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosContainer
