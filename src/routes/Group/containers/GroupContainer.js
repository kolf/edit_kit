import { connect } from 'react-redux'
import { queryGroup } from '../modules/group'

import Group from '../components/Group'

const mapDispatchToProps = {
  queryGroup
}

const mapStateToProps = (state) => {
  return ({
    group : state.group,
    list : state.group.list,
    tagsMap : state.group.tagsMap,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Group)
