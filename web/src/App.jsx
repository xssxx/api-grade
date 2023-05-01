import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import Grade from './components/Grade'
// import { useSelector } from 'react-redux'

const App = () => {
  // const token = useSelector((state) => state.user.token)
  const [token, setToken] = useState('')

  useEffect(() => {
    setToken(localStorage.getItem('accesstoken'))
  }, [])

  return (
    <div>
      {
        token
        ?
          <Grade />
        :
          <Login />
      }
    </div>
  )
}

export default App