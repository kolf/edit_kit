import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'group',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Group = require('./containers/GroupContainer').default
      const reducer = require('./modules/group').default
      const actions = require('./modules/group').actions

      injectReducer(store, { key: 'group', reducer })

      store.dispatch(actions.queryGroup())

      cb(null, Group)
    }, 'group')
  }
})
