import { FC, ReactElement } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { IProduct } from 'api/models'
import { ProductCard } from 'components'

interface IProductList {
  products: IProduct[] | null
  className?: string
}

const ProductList: FC<IProductList> = ({
  products,
  className
}): ReactElement => (
  <Container className={className}>
    <Row className='justify-content-center'>
      {products != null &&
        <>
          {products.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <div style={{ margin: '10px', padding: '10px' }}>
                <ProductCard key={product.id} product={product} />
              </div>
            </Col>
          ))}
        </>}
    </Row>
  </Container>
)

export { ProductList }
