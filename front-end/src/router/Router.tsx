import { RouteObject } from 'react-router-dom'

import { Main, ProductsPage, ReviewsPage } from 'pages'

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Main />
  },
  {
    path: '/products',
    element: <ProductsPage />
  },
  {
    path: '/reviews',
    element: <ReviewsPage />
  }
]

export { routes }
