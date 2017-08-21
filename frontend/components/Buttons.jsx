import React from 'react'

class Buttons extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={ (e) => {
            e.preventDefault()
            this.props.add(newTodoText.value)
            newTodoText.value = ''
          }
        }>
          <input id="newTodoText"></input>
          <button type="submit">Add new todo</button>
        </form>
        <div>Set visibility filter:
          <span> </span>
          <a href="#"
            style={{textDecoration: ( this.props.filter === 'All' ) ? 'underline' : 'none' }}
            onClick={() => this.props.setFilter('ALL')}>All</a>
          <span> </span>
          <a href="#"
            style={{textDecoration: ( this.props.filter === 'Completed' ) ? 'underline' : 'none' }}
            onClick={() => this.props.setFilter('COMPLETED')}>Completed</a>
          <span> </span>
          <a href="#"
            style={{textDecoration: ( this.props.filter === 'Todo' ) ? 'underline' : 'none' }}
            onClick={() => this.props.setFilter('TODO')}>Todo</a>
        </div>
      </div>
    )
  }
}

export default Buttons
