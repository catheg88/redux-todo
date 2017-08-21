import React from 'react'

class Todos extends React.Component {

  render() {
    let visibleTodos
    if (this.props.filter === 'All') {
      visibleTodos = this.props.todos
    }

    if (this.props.filter === 'Completed') {
      visibleTodos = this.props.todos.filter( todo => (todo.completed === true) )
    }

    if (this.props.filter === 'Todo') {
      visibleTodos = this.props.todos.filter( todo => (todo.completed === false) )
    }

    return(
      <ul>
        {visibleTodos.map( (todo, key) => (
          <li key={key}>
            <span className="TodoItem"
              onClick={() => this.props.toggleComplete(todo.id)}
              style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            >{todo.text}
          </span>
          <a className="RemoveLink" href="#" onClick={() => this.props.delete(todo.id)}>remove todo</a>
          </li>
        ))}
      </ul>
    )
  }
}

export default Todos
