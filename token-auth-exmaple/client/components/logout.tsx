import { useUser } from 'contexts/UserContext'
import { environment } from 'libs/environments'
import { poster } from 'libs/fetcher'
import Router from 'next/router'
import { FC } from 'react'

export const Logout: FC = () => {
  const { user } = useUser()

  const onLogout = async () => {
    await poster(`${environment.apiUrl}/logout`)
    Router.replace('/')
  }

  const onLogoutAll = async () => {
    await poster(`${environment.apiUrl}/logout-all`)
    Router.replace('/')
  }

  return (
    <>
      {user && (
        <div className="flex justify-center space-x-2">
          <button className="text-sm font-medium text-blue-500" onClick={onLogout}>
            Logout
          </button>
          <button className="text-sm text-blue-500" onClick={onLogoutAll}>
            Logout All
          </button>
        </div>
      )}
    </>
  )
}
