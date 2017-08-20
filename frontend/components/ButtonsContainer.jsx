import { connect } from 'react-redux'
import Actions from '../actions'
import Buttons from './Buttons'

const mapDispatchToProps = dispatch => ({
  add: text => dispatch( Actions.ADD_TODO(text) ),
  setFilter: (filter) => dispatch( Actions.SET_FILTER(filter) )
})

const mapStateToProps = state => ({
  filter: state.filter
})

const ButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons)

export default ButtonsContainer
