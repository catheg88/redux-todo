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
        <div>Current visibility filter: {this.props.filter}</div>
        <div>Set visibility filter:
          <span> </span>
          <a href="#" style={{ color: 'blue' }} onClick={() => this.props.setFilter('ALL')}>All</a>
          <span> </span>
          <a href="#" style={{ color: 'blue' }} onClick={() => this.props.setFilter('COMPLETED')}>Completed</a>
          <span> </span>
          <a href="#" style={{ color: 'blue' }} onClick={() => this.props.setFilter('TODO')}>Todo</a>
        </div>
      </div>
    )
  }
}

export default Buttons
