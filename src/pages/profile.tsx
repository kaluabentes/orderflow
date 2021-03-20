import React, { useState } from 'react'
import { patch } from '~/api/users'
import Profile from '~/components/templates/Profile'
import User from '~/state/User'

function ProfilePage() {
  const user = User.useContainer()
  const [mode, setMode] = useState('view')
  const [isLoading, setIsLoading] = useState(false)

  function saveChanges(id, data) {
    setIsLoading(true)
    patch(id, data).then(response => {
      user.login(response.data)
      setIsLoading(false)
      setMode('view')
    })
  }

  return (
    <Profile
      isLoading={isLoading}
      mode={mode}
      user={user.state}
      onSaveChanges={saveChanges}
    />
  )
}

export default ProfilePage
