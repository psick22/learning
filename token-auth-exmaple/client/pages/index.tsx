import { environment } from 'libs/environments'
import type { NextPage } from 'next'
import Link from 'next/link'
import { GitHubIcon } from 'icons/github'

const Home: NextPage = () => {
  const gitHubUrl = `https://github.com/login/oauth/authorize?client_id=${environment.gitHubClientId}&redirect_uri=${environment.gitHubRedirectUri}?scope=user:email`

  return (
    <main className="flex items-center justify-center h-full">
      <Link href={gitHubUrl}>
        <a className="flex items-center px-4 py-2 space-x-4 font-medium text-white bg-gray-900 rounded">
          <span className="w-8 fill-current">
            <GitHubIcon />
          </span>
          <span>Sign in with GitHub</span>
        </a>
      </Link>
    </main>
  )
}

export default Home
