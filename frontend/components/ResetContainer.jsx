import { connect } from 'react-redux'
import Reset from './Reset'
import Actions from '../actions'

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch( Actions.RESET() )
})

const ResetContainer = connect(
  null,
  mapDispatchToProps
)(Reset)

export default ResetContainer
