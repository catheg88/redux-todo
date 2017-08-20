import Actions from './actions'

const initialState = {
  todos: []
}

let counter = 0

const Reducer = ( state = initialState, action ) => {
  console.log(action)

  let newState = Object.assign({}, state)
  newState.todos = state.todos.map( i => i )

  switch(action.type) {
    case 'RESET':
      counter = 0
      newState.todos = []
      return newState
    case 'ADD_TODO':
      counter += 1

      var newTodo = Object.assign({}, action.todo, {
        id: counter
      })
      newState.todos.push(newTodo)
      return newState

    case 'DELETE_TODO':
      var newTodos = []
      state.todos.forEach( todo => {
        if (action.id !== todo.id) {
          newTodos.push(todo)
        }
      })
      newState.todos = newTodos
      return newState
    case 'TOGGLE_TODO':
      var newTodos = state.todos.map( todo => {
        if (action.id === todo.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
      newState.todos = newTodos
      return newState
    default:
      return newState
  }
}

export default Reducer
