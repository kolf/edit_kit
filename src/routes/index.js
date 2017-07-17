import Layout from '../layouts'
import Home from './Home'
import GroupRoute from './Group'

export const createRoutes = (store) => (
  {
    path: '/',
    component: Layout,
    indexRoute: Home,
    childRoutes: [
      GroupRoute(store)
    ]
  }
)

export default createRoutes
