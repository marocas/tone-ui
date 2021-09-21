import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { FC } from 'react'

const Providers: FC = ({ children }) => {
  return <>{children}</>
}

const customRender = (ui: ReactElement, options: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
