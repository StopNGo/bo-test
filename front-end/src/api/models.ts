export interface IProduct {
  id: number
  name: string
  image: string
  altImage: string
  series: string
  price: number
  available: boolean
  favorite: boolean
}

export type TRating = 0 | 1 | 2 | 3 | 4 | 5

export interface IReview {
  id: number
  author: string
  rating: TRating
  posted: Date
  content: string
}
