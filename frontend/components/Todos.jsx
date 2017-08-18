import React from 'react'

class Todos extends React.Component {

  render() {
    return(
      <ul>
        {this.props.todos.map( todo => {
          if( todo.completed === true ){
            return (
              <li>
                <span
                  onClick={() => this.props.toggleComplete(todo.id)}
                  style={{textDecoration: 'line-through'}}
                >{todo.text}</span>
                <span> - </span>
                <span>
                  <button onClick={() => this.props.delete(todo.id)}>remove todo</button>
                </span>
              </li>
            )
          } else {
          return (
            <li>
              <span onClick={() => this.props.toggleComplete(todo.id)}>{todo.text}</span>
              <span> - </span>
              <span>
                <button onClick={() => this.props.delete(todo.id)}>remove todo</button>
              </span>
            </li>
          )}
        })}
      </ul>
    )
  }
}

export default Todos
