import React, { useContext } from 'react'
import { UserContext } from './UserContext';



const Profile = () => {

  const {user} = useContext(UserContext)

  return (
    <div>
      Profile of {user}
    </div>
  )
}

export default Profile
