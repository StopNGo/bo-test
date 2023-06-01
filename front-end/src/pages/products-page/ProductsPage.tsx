import { FC, ReactElement } from 'react'

import { useFetch } from 'api/useFetch'
import { IProduct } from 'api/models'
import { ProductList } from 'widgets'
import { BASE_URL } from 'api/constants'

const ProductsPage: FC = (): ReactElement => {
  const { data, loading, error } = useFetch<IProduct>(`${BASE_URL}/products`)

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      {(error != null) && <div>{error}</div>}
      {(data != null) &&
        <ProductList products={data} />}
    </div>
  )
}

export { ProductsPage }
