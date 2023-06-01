import { FC, ReactElement } from 'react'
import { Col, Row, Form as FormBoot } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage, FormikErrors } from 'formik'
import cn from 'classnames'

import styles from './reviewForm.module.scss'

interface IReviewForm {
  className?: string
  onSubmitHandler: (...args: any[]) => void
}

export interface IReviewFormValues {
  email: string
  name: string
  comment: string
  phone: string
}

const ReviewForm: FC<IReviewForm> = ({ className, onSubmitHandler }): ReactElement => {
  return (
    <div className={cn(className, styles.form)}>
      <h1>Leave a Review</h1>
      <p className={styles.note}>
        Your email address wil not be published. Required fields are marked *
      </p>
      <Formik
        initialValues={{ email: '', name: '', comment: '', phone: '' }}
        validateOnBlur={false}
        validate={(values: IReviewFormValues) => {
          const errors: FormikErrors<IReviewFormValues> = {}
          if (values.email === '') {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          if (values.name === '') {
            errors.name = 'Required'
          }
          if (values.comment === '') {
            errors.comment = 'Required'
          }
          return errors
        }}
        onSubmit={onSubmitHandler}
      >
        {() => (
          <Form>
            <Row>
              <Col md='12'>
                <Field type='text' as='textarea' rows='3' name='comment' placeholder='Comment *' />
                <ErrorMessage name='comment' component='div' className={styles.error} />
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <Field type='text' name='name' placeholder='Name *' />
                <ErrorMessage name='name' component='div' className={styles.error} />
              </Col>
              <Col md='6'>
                <Field type='email' name='email' placeholder='Email *' />
                <ErrorMessage name='email' component='div' className={styles.error} />
              </Col>
            </Row>
            <Row>
              <Col md='12'>
                <Field type='text' name='phone' placeholder='Phone (Optional)' />
                <ErrorMessage name='phone' component='div' />
              </Col>
            </Row>

            <FormBoot.Check
              type='checkbox'
              label='Save my name and email in this browser for the next time I comment.'
            />

            <button type='submit'>
              Post Review
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { ReviewForm }
