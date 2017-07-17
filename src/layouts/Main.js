import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Content } = Layout

const Main = ({ children }) => <Content>
  {children}
</Content>

Main.propTypes = {
  children: PropTypes.node
}

export default Main
