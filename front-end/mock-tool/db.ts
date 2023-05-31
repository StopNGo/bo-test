interface IProduct {
  id: number
  name: string
  series: string
  price: number
  available: boolean
}

type TRating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5

interface IReview {
  id: number
  author: string
  rating: TRating
  posted: Date
  content: string
}

interface IData {
  products: IProduct[]
  reviews: IReview[]
}

export const data: IData = {
  products: [
    {
      id: 1,
      name: 'Mystic Midnight',
      series: 'Luminous Dreams',
      price: 176.24,
      available: true
    },
    {
      id: 2,
      name: 'Luminous Lagoon',
      series: 'Luminous Dreams',
      price: 123.45,
      available: false
    },
    {
      id: 3,
      name: 'Whispering Willow',
      series: 'Luminous Dreams',
      price: 199.99,
      available: true
    },
    {
      id: 4,
      name: 'Enchanted Elixir',
      series: 'Mystical Aura',
      price: 155.75,
      available: false
    },
    {
      id: 5,
      name: 'Radiant Rosewood',
      series: 'Mystical Aura',
      price: 111.11,
      available: true
    },
    {
      id: 6,
      name: 'Glistening Grotto',
      series: 'Luminous Dreams',
      price: 187.63,
      available: false
    },
    {
      id: 7,
      name: 'Serenity Springs',
      series: 'Mystical Aura',
      price: 134.67,
      available: true
    },
    {
      id: 8,
      name: 'Golden Gleam',
      series: 'Mystical Aura',
      price: 189.0,
      available: false
    },
    {
      id: 9,
      name: 'Twilight Tranquility',
      series: 'Luminous Dreams',
      price: 143.88,
      available: true
    },
    {
      id: 10,
      name: 'Opalescent Opulence',
      series: 'Mystical Aura',
      price: 198.12,
      available: true
    }
  ],
  reviews: [
    {
      id: 1,
      author: 'John Doe',
      rating: 4,
      posted: new Date('12-Sep-2021'),
      content:
        'Proin vel turpis dictum, cursus libero ac, facilisis quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut tristique tempor ante, ut placerat turpis suscipit nec. Proin orci purus, pretium at placerat nec, tincidunt et orci. Quisque orci tellus, gravida sit amet rhoncus quis, volutpat ac metus. Vestibulum posuere urna nec euismod fringilla. Nunc commodo condimentum odio ut tristique. Nullam ut rhoncus libero. Duis elementum mi turpis, a molestie quam mollis vitae. Maecenas vehicula sodales tristique. Duis semper massa velit, et tempus magna interdum et. Phasellus rhoncus leo in hendrerit scelerisque. Suspendisse mollis finibus felis vitae mattis. Sed pretium est augue, at mollis ligula egestas at.'
    }
  ]
}
