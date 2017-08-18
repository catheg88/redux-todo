import Actions from './actions'

const initialState = {
  todos: []
}

let counter = 0

const Reducer = ( state = initialState, action ) => {
  console.log('---reducing with action---')
  console.log(action)

  switch(action.type) {
    case Actions.RESET:
      counter = 0
      return { todos: [] }
    case Actions.ADD_TODO:
      counter += 1

      var newTodo = Object.assign({}, action.todo, {
        id: counter
      })

      var newTodos = state.todos.map( todo => todo )
      newTodos.push(newTodo)

      return Object.assign({}, state, {
        todos: newTodos
      })
    case Actions.DELETE_TODO:
      var newTodos = []
      state.todos.forEach( todo => {
        if (action.id !== todo.id) {
          newTodos.push(todo)
        }
      })
      return Object.assign({}, state, {
        todos: newTodos
      })
    case Actions.TOGGLE_TODO:
      var newTodos = state.todos.map( todo => {
        if (action.id === todo.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })

      return Object.assign({}, state, {
        todos: newTodos
      })
    default:
      return state
  }
}

export default Reducer
