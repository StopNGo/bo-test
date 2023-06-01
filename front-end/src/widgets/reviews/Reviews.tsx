import { FC, ReactElement, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FormikHelpers } from 'formik'
import cn from 'classnames'

import { IReview } from 'api/models'
import { ReviewBlock, ReviewForm, IReviewFormValues } from 'components'

import styles from './reviews.module.scss'

interface IReviews {
  reviews: IReview[] | null
  className?: string
}

const Reviews: FC<IReviews> = ({ reviews, className }): ReactElement => {
  const [reviewsList, setReviewsList] = useState(reviews)
  const [lastId] = useState(
    reviews != null ? reviews.slice(-1)[0].id : 0
  )

  const onSubmitHandler = (values: IReviewFormValues, { resetForm }: FormikHelpers<IReviewFormValues>): void => {
    const newReview: IReview = {
      id: lastId + 1,
      author: values.name,
      content: values.comment,
      posted: new Date(),
      rating: 4
    }
    if (reviewsList != null) {
      setReviewsList([...reviewsList, newReview])
    } else {
      setReviewsList([newReview])
    }

    resetForm()
  }

  return (
    <Container className={cn(className, styles.reviews)}>
      <Row>
        {reviewsList != null && (
          <>
            {reviewsList.map((review) => (
              <Col key={review.id} md='12'>
                <ReviewBlock key={review.id} review={review} />
                <hr />
              </Col>
            ))}
          </>
        )}
      </Row>

      <a href='#'>Read All Reviews</a>
      <Row>
        <ReviewForm onSubmitHandler={onSubmitHandler} className={styles.form} />
      </Row>
    </Container>
  )
}

export { Reviews }
