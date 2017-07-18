import React from 'react'
// import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Card.less'
import { Button, Input, Tag } from 'antd'

const btnMap = {
  edit: {
    icon: 'edit',
    title: '编审',
    click: ({ groupId }) => {
      // window.open(`/group/update/${groupId}`)
      console.log(groupId)
      window.open('/group/update/13382695')
    },
  },
  push: {
    icon: 'menu-unfold',
    title: '推送',
  },
  toUnEdit: {
    icon: 'file-add',
    title: '添加待编审',
  },
  topic: {
    icon: 'plus-square-o',
    title: '加入专题',
  },
  online: {
    icon: 'arrow-up',
    title: '上线',
  },
  link: {
    icon: 'link',
    title: '前台链接',
  },
  recommend: {
    icon: 'like-o',
    title: '推荐',
  },
  history: {
    icon: 'file-text',
    title: '编审记录',
  },
  updateTime: {
    icon: 'clock-circle-o',
    title: '更新上线时间',
  },
}

export const Card = ({ data, columns, index, btns, cardClass, update, tagsMap }) => {
  const inputChange = (e) => {
    console.log(e.target.value)
  }

  console.log(tagsMap)

  const children = columns.map(item => {
    const { field, title, className, form, placeholder } = item
    let content = data[field]

    if (field === 'oss176') {
      content = <img src={content} alt={title} />
    }
    if (form) {
      switch (form) {
        case 'input':
          content = <Input value={content} onChange={inputChange} placeholder={placeholder} />
          break
        case 'textarea':
          content = <Input type='textarea' onChange={inputChange} placeholder={placeholder} rows={4} value={content} />
          break
        case 'tag':
          content = content.match(/\d+/g).map(item => <Tag>{item}</Tag>)
          break
        default:
      }
    }
    return (
      <div className='card-line'>
        {title && <span className='card-line-label'>{title}</span>}
        <span className={classnames('card-line-control', className)}>{content}</span>
      </div>
    )
  })

  return (
    <div className={classnames('card', cardClass, { selected: data.selected })}>
      {children}
      {(btns && btns.length > 0) && <div className='btns'>{btns.reduce((result, key) => {
        const btn = btnMap[key]
        if (btn) {
          result.push(<Button onClick={() => { btn.click(data) }} icon={btn.icon} title={btn.title} />)
        }
        return result
      }, [])}</div>}
      <div className='card-num'>{index + 1}</div>
    </div>
  )
}

Card.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.object,
  index: PropTypes.number,
  btns: PropTypes.array,
  update: PropTypes.func,
  cardClass: PropTypes.string,
  tagsMap: PropTypes.object,
}

export default Card
