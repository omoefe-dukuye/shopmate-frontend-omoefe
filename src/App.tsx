import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import React, {
  createContext, useEffect, useState,
} from 'react'
import { ApolloProvider } from 'react-apollo'
import AppRouter from './router/AppRouter'

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  resolvers: {},
  uri: 'https://omo-shopmate.herokuapp.com/',
})

interface IAppContext {
  mobile ?: boolean | undefined,
}

export const AppContext = createContext({} as IAppContext)

library.add(faExclamationTriangle)

const App: React.FC = () => {
  const [mobile, setMobileState] = useState<boolean | undefined>(undefined)
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 720) {
        setMobileState(true)
      } else if (mobile !== false) {
        setMobileState(false)
      }
    }
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [mobile])

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={{ mobile }} >
        {
          mobile !== undefined && <AppRouter />
        }
      </AppContext.Provider>
    </ApolloProvider>
  )
}

export default App
