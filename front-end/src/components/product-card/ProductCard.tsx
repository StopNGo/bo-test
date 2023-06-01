import { FC, ReactElement, MouseEvent, useState } from 'react'
import {
  Card,
  Button,
  Image,
  OverlayTrigger,
  Tooltip,
  Form
} from 'react-bootstrap'
import cn from 'classnames'

import { IProduct } from 'api/models'
import { FavoritesIcon } from 'components'

import styles from './productCard.module.scss'

interface IProductCard {
  product: IProduct | null
  className?: string
  onClick?: (_e: MouseEvent<HTMLDivElement>) => void
}

const ProductCard: FC<IProductCard> = ({
  product,
  onClick,
  className
}): ReactElement => {
  const [isFavorite, setIsFavorite] = useState(
    product != null ? product.favorite : false
  )

  return (
    <div onClick={onClick} className={cn(className, styles.product)}>
      {product != null && (
        <Card>
          <Card.Body>
            <div className={styles.image}>
              <Image className={styles.main} src={product.image} />
              <Image className={styles.alt} src={product.altImage} />
              <div className={styles.room}>Shop by Room</div>
              <div className={styles.details}>Product Details</div>
            </div>
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip id='tooltip'>Add to Favorites</Tooltip>}
            >
              <Button
                variant='link'
                className={styles.fav}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <FavoritesIcon active={isFavorite} />
              </Button>
            </OverlayTrigger>
            <div className='d-flex justify-content-between'>
              <Card.Title className={styles.title}>{product.name}</Card.Title>
              <div className={styles.price}>${product.price.toFixed(2)}</div>
            </div>
            <div className={styles.series}>{product.series}</div>
            <div className='d-flex justify-content-between'>
              <div className={styles.available}>
                {product.available && <span>Available Now</span>}
              </div>
              <Form.Check
                className={styles.compare}
                type='checkbox'
                label='Compare'
                reverse
              />
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export { ProductCard }
