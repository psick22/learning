import { UserDocument } from '@shared'
import { Logout } from 'components/logout'
import { useUser } from 'contexts/UserContext'
import { environment } from 'libs/environments'
import { fetcherSSR } from 'libs/fetcher-ssr'
import { GetServerSideProps } from 'next'
import { FC } from 'react'

const MeSSR: FC = () => {
  const { user } = useUser()

  return (
    <main className="flex items-center justify-center h-full">
      <div className="text-center space-y-4">
        <h1 className="px-4 py-2 text-lg font-medium bg-gray-200 rounded">
          Server side authentication
        </h1>
        <p>Hi, {user!.id} 👋</p>
        <Logout />
      </div>
    </main>
  )
}

export default MeSSR

export const getServerSideProps: GetServerSideProps<UserDocument> = async (context) => {
  const { req, res } = context
  const [error, user] = await fetcherSSR<UserDocument>(req, res, `${environment.apiUrl}/me`)
  if (!user) return { redirect: { statusCode: 307, destination: '/' } }
  return { props: { user } }
}
