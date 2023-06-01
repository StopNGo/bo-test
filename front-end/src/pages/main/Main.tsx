import { FC, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

const Main: FC = (): ReactElement => {
  return (
    <div>
      <NavLink to='products'>Products List Widget</NavLink>
      <br />
      <NavLink to='reviews'>Reviews Widget</NavLink>
    </div>
  )
}

export { Main }
