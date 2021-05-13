import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './style.css'

const Header = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?inc=name,nat&results=10', {
        method: 'GET'
      })
      const responseUsers = await response.json()
      setUsers(responseUsers.results)
    } catch (error) {
      console.log('error', error)
    }
  }

  // console.log('users',users)

  const name = useSelector((store) => store.showName)
  const showIcon = useSelector((store) => store.showIcon)

  return (
    <div className="l_header">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
        <Link to="/home">
          Home
        </Link>
        <Link to="/user">
          User
        </Link>
        <Link to="/others">
          Others
        </Link>
      </div>
      <div>
        {showIcon && <i className="el-icon-star-on"></i>}
        <div>{name}</div>
      </div>
    </div>
  )
}

export default Header
