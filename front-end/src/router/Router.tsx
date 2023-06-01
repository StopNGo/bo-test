import { RouteObject } from 'react-router-dom'

import { Main, ProductsPage } from 'pages'

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Main />
  },
  {
    path: '/products',
    element: <ProductsPage />
  }
]

export { routes }
