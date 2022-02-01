import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from 'components/Navigation'
import { UserProvider } from 'contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider initialUser={pageProps?.user}>
      <div className="h-screen">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  )
}

export default MyApp
