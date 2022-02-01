import Router from 'next/router'
import { useEffect } from 'react'

import { UserDocument } from '@shared'
import { useUser } from 'contexts/UserContext'
import { environment } from 'libs/environments'
import { fetcher } from 'libs/fetcher'
import { Logout } from 'components/logout'

export default function Me() {
  const { user, setUser } = useUser()

  const getMe = async () => {
    const [error, user] = await fetcher<UserDocument>(`${environment.apiUrl}/me`)
    if (!error && user) setUser(user)
    else Router.push('/')
  }

  useEffect(() => {
    if (!user) getMe()
  })

  return (
    <main className="flex items-center justify-center h-full">
      <div className="space-y-4 text-center">
        <h1 className="px-4 py-2 text-lg font-medium bg-gray-200 rounded">
          Client side authentication
        </h1>
        {user ? (
          <p>
            Hi, {user.name} {user.id} 👋
          </p>
        ) : (
          <p>Loading...</p>
        )}
        <Logout />
      </div>
    </main>
  )
}
