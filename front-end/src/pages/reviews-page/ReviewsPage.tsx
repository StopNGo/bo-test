import { FC, ReactElement } from 'react'

import { useFetch } from 'api/useFetch'
import { IReview } from 'api/models'
import { Reviews } from 'widgets'
import { BASE_URL } from 'api/constants'

const ReviewsPage: FC = (): ReactElement => {
  const { data, loading, error } = useFetch<IReview>(`${BASE_URL}/reviews`)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {error != null && <div>{error}</div>}
      {data != null && <Reviews reviews={data} />}
    </>
  )
}

export { ReviewsPage }
