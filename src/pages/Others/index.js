import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Others = () => {
  const [num, setNum ] = useState(0)
  const user = useSelector((store) => store.user.list)
  console.log('Others', user.data)
  return (
    <div>
      Others
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  )
}

export default Others
