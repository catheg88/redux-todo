import React from 'react'

class AddNew extends React.Component {

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
        <button onClick={this.props.reset}>reset</button>
      </div>
    )
  }
}

export default AddNew
