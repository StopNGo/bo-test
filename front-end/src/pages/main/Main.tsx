import { FC, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

const Main: FC = (): ReactElement => {
  return (
    <div>
      <NavLink to='products'>Products List Widget</NavLink>
    </div>
  )
}

export { Main }
