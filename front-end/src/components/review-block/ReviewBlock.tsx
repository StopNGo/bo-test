import { FC, ReactElement } from 'react'
import cn from 'classnames'

import { IReview } from 'api/models'
import { Rating } from 'components'

import styles from './reviewBlock.module.scss'

interface IReviewBlock {
  review: IReview | null
  className?: string
}

const ReviewBlock: FC<IReviewBlock> = ({ review, className }): ReactElement => {
  return (
    <div className={cn(className)}>
      {review != null && (
        <>
          <h3>{review.author}</h3>
          <div className={styles.date}>{new Date(review.posted).toLocaleDateString(
            'en-US',
            { year: 'numeric', month: 'long', day: 'numeric' }
          )}
          </div>
          <Rating rating={review.rating} />
          <p className={styles.content}>{review.content}</p>
        </>
      )}
    </div>
  )
}

export { ReviewBlock }
