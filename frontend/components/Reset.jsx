import React from 'react'

class Reset extends React.Component {

  render() {
    return (
      <button onClick={this.props.reset}>reset</button>
    )
  }
  
}

export default Reset
