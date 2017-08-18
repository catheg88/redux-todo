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
          <button type="submit">Add new</button>
        </form>
        <button onClick={this.props.reset}>reset</button>
      </div>
    )
  }
}

export default Buttons
