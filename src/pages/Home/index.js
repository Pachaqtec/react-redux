import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Button } from 'element-react'

import { showName, showIcon } from 'actions/nombre/show'
import { list as listUsers, reset as resetListUser } from 'actions/user/list'

const URL_API = 'https://randomuser.me/api/?inc=name,nat&results=10'

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user.list)
  const showIconValue = useSelector((store) => store.showIcon)

  useEffect(() => {
    if (user.data.length === 0) {
      dispatch(listUsers(URL_API))
    }
    return () => {
      console.log('resetListUser')
      dispatch(resetListUser())
    }
  }, [])

  const onChange = (value) => {
    dispatch(showName(value))
  }

  const onClick = () => {
    dispatch(showIcon())
  }
  console.log('store', user)
  return (
    <div>
      {user.loading && <i className="el-icon-loading"></i>}
      {!user.loading
        && user.data.map((u) => (
          <div>
            <div>{u.name.first}</div>
            <div>{u.nat}</div>
          </div>
        ))}
      <Input
        onChange={onChange}
        placeholder="Please input"
      />
      <Button
        onClick={onClick}
        type={showIconValue ? 'danger' : 'success'}
      >
        {showIconValue ? 'ocultar' : 'mostrar'} ícono
      </Button>
    </div>
  )
}

export default Home
