import fetch from '../../../utils/request'
// ------------------------------------
// Constants
// ------------------------------------
export const QUERY_GROUP = 'QUERY_GROUP'
export const QUERY_TAGS = 'QUERY_TAGS'

// ------------------------------------
// Actions
// ------------------------------------
export const queryGroup = () => {
  return (dispatch, getState) => {
    fetch({
      url: 'http://dev.editservice.vcg.com/group/startEdit?editType=3&groupId=13382695'
    }).then(res => {
      dispatch({
        type    : QUERY_GROUP,
        payload : res.data
      })

      dispatch(queryTags(res.data))
    })
  }
}

export const queryTags = (groupData) => {
  const getIds = () => {
    const { group, list } = groupData
    return list.reduce((result, item) => result.concat((item.keywords || '').match(/\d+/g).filter(id => result.indexOf(id) === -1)), (group.keywords || '').match(/\d+/g))
  }

  return (dispatch) => {
    fetch({
      url: 'http://dev.editservice.vcg.com/proxy/post?url=cfp/keyword/get/ids',
      method: 'POST',
      data: {
        data: getIds().join(',')
      }
    }).then(res => {
      // console.log(res)
      dispatch({
        type    : QUERY_TAGS,
        payload : res.data
      })
    })
  }
}

export const actions = {
  queryGroup,
  queryTags,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [QUERY_GROUP] : (state, action) => {
    const { list, group } = action.payload
    return {
      group,
      list,
      page: {
        total: list.length
      }
    }
  },
  [QUERY_TAGS] : (state, action) => {
    state.tagsMap = action.payload.reduce((result, tag) => {
      result[tag.id] = tag
      return result
    }, {})
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: [],
  page: {
    total: 0
  },
  tagsMap: {}
}

export default function groupReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
