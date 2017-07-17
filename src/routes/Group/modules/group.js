// ------------------------------------
// Constants
// ------------------------------------
export const QUERY_GROUP = 'QUERY_GROUP'

// ------------------------------------
// Actions
// ------------------------------------
export const queryGroup = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      fetch('http://dev.editservice.vcg.com/group/startEdit?editType=3&groupId=13382695').then(res => {
        if (res.ok) {
          res.json().then(data => {
            dispatch({
              type    : QUERY_GROUP,
              payload : data.data
            })
            resolve()
          })
        }
      })
    })
  }
}

export const actions = {
  queryGroup
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
