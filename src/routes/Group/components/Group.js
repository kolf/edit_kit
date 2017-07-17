import React from 'react'
import PropTypes from 'prop-types'
import ImageList from '../../../components/Cards'

export const Group = ({ group, queryGroup }) => {
  console.log(group.tagsMap)
  const listProps = {
    columns: [
      {
        field: 'oss176',
        className: 'card-line-img',
      },
      {
        field: 'resId',
        title: '单张ID:',
      },
      {
        field: 'dateCameraShot',
        form: 'input',
      },
      {
        field: 'providerCaption',
        form: 'textarea',
        className: 'card-line-textarea',
        placeholder: '请输入原始图说',
      },
      {
        field: 'caption',
        form: 'textarea',
        className: 'card-line-textarea',
        placeholder: '请输入新加图说',
      },
      {
        field: 'keywords',
        form: 'tag',
        className: 'card-line-tag',
        placeholder: '请输入关键词',
      },
      {
        field: 'province',
        form: 'textarea',
        className: 'card-line-textarea',
        placeholder: '',
      },
    ],
    dataSource: group.list,
    tagsMap: group.tagsMap,
  }

  return (
    <div>
      <ImageList {...listProps} />
    </div>
  )
}
Group.propTypes = {
  group: PropTypes.object.isRequired,
  queryGroup: PropTypes.func.isRequired
}

export default Group
