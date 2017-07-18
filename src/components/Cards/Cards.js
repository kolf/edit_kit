import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Input } from 'antd'
import lodash from 'lodash'
import getDevice from '../../utils/getDevice'
import Pager from '../Pager'
import Card from './Card'
import './Cards.less'

const ButtonGroup = Button.Group
const containerTop = 64
// const listSize = 24

class Cards extends React.Component {
  constructor (props) {
    super(props)
    const { dataSource } = props
    this.state = {
      rowIndex: 0,
      rowSize: 8,
      dataSource
    }

    this.handelScroll = this.handelScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handelScroll, false)
    window.addEventListener('resize', this.handelResize, false)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handelScroll, false)
    window.removeEventListener('resize', this.handelResize, false)
  }

  componentWillReceiveProps (nextProps) {
    const staticNextProps = lodash.cloneDeep(nextProps)
    delete staticNextProps.columns
    const { columns, ...otherProps } = this.props

    if (!lodash.isEqual(staticNextProps, otherProps)) {
      // this.props = nextProps
      this.setState({
        dataSource: nextProps.dataSource
      })
    }
  }

  handelResize = (e) => {
    const rowsMap = {
      sm: 2,
      md: 4,
      lg: 6,
      xl: 8
    }

    this.setState({
      rowSize: rowsMap[getDevice()]
    })
  }

  handelScroll = (e) => {
    console.log(getDevice())
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    const rowIndex = parseInt((scrollTop - containerTop) / 670)
    this.setState({ rowIndex })
  }

  // handleSelect

  handleSelect = (key, btnIndex) => {
    const { dataSource } = this.state

    if (key || key === 0) {
      const { selected } = dataSource[key]
      dataSource[key].selected = !selected
    }
    switch (btnIndex) {
      case 0:
        dataSource.forEach(item => {
          item.selected = true
        })
        break
      case 1:
        dataSource.forEach(item => {
          item.selected = !item.selected
        })
        break
      case 2:
        dataSource.forEach(item => {
          item.selected = false
        })
        break
      default:
    }
    this.setState({ dataSource })
  }

  updateList = (index, key, value) => {

  }

  handleChange = (e) => {
    const { value } = e.target
    const { dataSource } = this.state
    dataSource.forEach(item => {
      item.caption = value
    })
    this.setState({ dataSource })
  }

  render () {
    const { columns, btns, page, cardClass, update, tagsMap} = this.props
    const { dataSource, rowIndex, rowSize } = this.state

    console.log(this.props)

    const List = dataSource.filter((item, index) => {
      item.key = index
      const startIndex = rowIndex * rowSize
      return (index >= startIndex) && (index < startIndex + rowSize * 3)
    }).map((item, index) => (<Col sm={12} md={6} lg={4} xl={3}>
        <Card key={item.key} update={update} tagsMap={tagsMap} data={item} cardClass={cardClass} columns={columns} index={item.key} btns={btns} />
      </Col>))

    return (
      <div className='list-wrap'>
        <div className='list-header'>
          <Row>
            <Col span={14}><div className='toolbar'>
              <ButtonGroup>
                {['全选', '反选', '取消'].map((item, index) => <Button key={index} onClick={() => { this.handleSelect('', index) }}>{item}</Button>)}
              </ButtonGroup>
              <ButtonGroup>
                <Button icon='addfolder' />
                <Button icon='folder' />
                <Button icon='laptop' />
                <Button icon='folder-open' />
              </ButtonGroup>
              <ButtonGroup>
                <Button icon='addfile' />
                <Button icon='file-unknown' />
              </ButtonGroup>
              <Button icon='folder-open' />
              <Input placeholder='批量修改图说测试' onChange={this.handleChange} />
            </div></Col>
            {page && <Col span={10} className='text-right'><Pager total={page.total} /></Col>}
          </Row>
        </div>
        <div className='list-body' style={{ paddingTop: rowIndex * 670, height: (dataSource.length / rowSize) * 670 }}>
          <Row>
            {List}
          </Row>
        </div>
        {page && <div className='text-right'>
          <Pager total={page.total} />
        </div>}
      </div>
    )
  }
}

Cards.propTypes = {
  cardClass: PropTypes.string,
  page: PropTypes.object,
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  btns: PropTypes.array,
  update: PropTypes.func,
  tagsMap: PropTypes.object,
  updateTagsMap: PropTypes.func
}

export default Cards
