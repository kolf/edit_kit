import { connect } from 'react-redux'
import { queryGroup } from '../modules/group'

import Group from '../components/Group'

const mapDispatchToProps = {
  queryGroup
}

const mapStateToProps = (state) => ({
  group : state.group
})

export default connect(mapStateToProps, mapDispatchToProps)(Group)
