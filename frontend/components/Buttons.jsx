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
            className={this.props.filter === 'All' ? 'active' : ''}
            onClick={() => this.props.setFilter('ALL')}>All</a>
          <span> </span>
          <a href="#"
            className={this.props.filter === 'Completed' ? 'active' : ''}
            onClick={() => this.props.setFilter('COMPLETED')}>Completed</a>
          <span> </span>
          <a href="#"
            className={this.props.filter === 'Todo' ? 'active' : ''}
            onClick={() => this.props.setFilter('TODO')}>Todo</a>
        </div>
      </div>
    )
  }
}

export default Buttons
