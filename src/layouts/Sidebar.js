import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

const Sidebar = ({ onCollapse }) => (<Sider>
  <div className='logo' />
	<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
		<Menu.Item key='1'>
			<Icon type='pie-chart' />
			<span>Option 1</span>
		</Menu.Item>
	</Menu>
</Sider>)

Sidebar.propsType = {
	onCollapse: PropTypes.func
}

export default Sidebar
