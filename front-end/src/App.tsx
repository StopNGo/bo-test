import { FC, ReactElement } from 'react'

import { Button } from 'react-bootstrap'
import { ErrorBoundary } from 'components'

const App: FC = (): ReactElement => {
  return (
    <ErrorBoundary>
      <div>
        Hello World
        <Button>Test</Button>
      </div>
    </ErrorBoundary>
  )
}

export { App }
