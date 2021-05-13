import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  useQueryClient
} from 'react-query'

const Others = () => {
  const query = useQueryClient()
  const [num, setNum ] = useState(0)
  const user = useSelector((store) => store.user.list)
  // console.log('Others', query)
  return (
    <div>
      Others
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  )
}

export default Others
