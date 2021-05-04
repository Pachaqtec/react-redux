import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Button } from 'element-react'

import { showName, showIcon } from 'actions/nombre/show'

const Home = () => {

  const dispatch = useDispatch()
  const showIconValue = useSelector((store) => store.showIcon)

  const onChange = (value) => {
    dispatch(showName(value))
  }

  const onClick = () => {
    dispatch(showIcon())
  }

  return (
    <div>
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
