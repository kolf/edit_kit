import React from 'react'
import PropTypes from 'prop-types'
import ImageList from '../../../components/Cards'

export const Group = ({ group, list, tagsMap, queryGroup }) => {
  console.log(group.tagsMap)
  console.log(list)
  console.log(tagsMap)
  
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
    dataSource: list,
    tagsMap,
  }

  return (
    <div>
      <ImageList {...listProps} />
    </div>
  )
}
Group.propTypes = {
  group: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  tagsMap: PropTypes.object,
  queryGroup: PropTypes.func.isRequired
}

export default Group
