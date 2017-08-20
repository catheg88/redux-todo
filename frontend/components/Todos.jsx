import React from 'react'

class Todos extends React.Component {

  strike(todoCompletion) {
    return todoCompletion ? {textDecoration: 'line-through'} : {}
  }

  render() {
    return(
      <ol>
        {this.props.todos.map( (todo, key) => (
          <li key={key}>
            <span
              onClick={() => this.props.toggleComplete(todo.id)}
              style={this.strike(todo.completed)}
            >{todo.text}</span><span> - </span>
            <button onClick={() => this.props.delete(todo.id)}>remove todo</button>
          </li>
        ))}
      </ol>
    )
  }
}

export default Todos
