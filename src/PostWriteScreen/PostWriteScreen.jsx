import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProseMirror from './ProseMirror'

function PostWriteScreen(props) {
  // eslint-disable-next-line react/prop-types
  const { userObject } = props

  const navi = useNavigate()

  useEffect(() => {
    if (!userObject) {
      return
    }
    navi('/')
    alert('로그인 후 가능합니다.')
  }, [])

  return (
    <div className={'PostWriteScreen'}>
      <ProseMirror />
    </div>
  )
}

export default PostWriteScreen
