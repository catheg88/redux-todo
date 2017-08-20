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
    toggleComplete: id => dispatch( Actions.TOGGLE_TODO(id) ),
    delete: id => dispatch( Actions.DELETE_TODO(id) )
  })
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosContainer
