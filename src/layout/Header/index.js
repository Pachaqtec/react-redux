import React from 'react'
import { useSelector } from 'react-redux'

import './style.css'

const Header = () => {

  const name = useSelector((store) => store.showName)
  const showIcon = useSelector((store) => store.showIcon)

  return (
    <div className="l_header">
      <div></div>
      <div>
        {showIcon && <i className="el-icon-star-on"></i>}
        <div>{name}</div>
      </div>
    </div>
  )
}

export default Header
