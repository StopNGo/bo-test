import { FC, ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'

import { ErrorBoundary } from 'components'
import { routes } from 'router/Router'

const App: FC = (): ReactElement => {
  const content = useRoutes(routes)

  return (
    <ErrorBoundary>
      {content}
    </ErrorBoundary>
  )
}

export { App }
