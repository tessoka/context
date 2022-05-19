import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const Login = () => {

  const {user, setUser} = useContext(UserContext)

  return (
    <div>
      Logged as {user}
      <br/><br/>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
    </div>
  )
}

export default Login
