const Actions = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  ADD_TODO: (text) => ({
    type: 'ADD_TODO',
    todo: {
      text: text,
      completed: false
    }
  }),
  DELETE_TODO: id => ({
    type: 'DELETE_TODO',
    id: id
  }),
  TOGGLE_TODO: id => ({
    type: 'TOGGLE_TODO',
    id: id
  }),
  RESET: () => ({
    type: 'RESET'
  })
}

export default Actions
