import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Sidebar from './Sidebar'
import './layout.less'

export const PageLayout = ({ children }) => (
  <Layout>
    {/*<Sidebar />*/}
    <Layout>
      {/*<Header />*/}
      <Main children={children} />
      {/*<Footer />*/}
    </Layout>
  </Layout>
)

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
