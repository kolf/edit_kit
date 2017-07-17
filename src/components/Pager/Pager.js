import React from 'react'
import PropTypes from 'prop-types'
import './Pager.less'
import { Pagination, Select, Affix } from 'antd'

export const Pager = ({ total }) => {
  console.log(total)
  return (<div className='page-wrap'>
    <div className='page-total'>{`共 ${total} 条`}</div>
    <Affix><Pagination className='page' simple total={total} /></Affix>
    <Select defaultValue={60} className='page-downdrop'>
      {[60, 100, 200].map(tiem => <Option value={tiem}>{tiem}条/页</Option>)}
    </Select>
  </div>)
}

Pager.propTypes = {
  total: PropTypes.number.isRequired,
}

export default Pager
