import '../src/_assets/styles/index.scss'
import './custom.css'
import viewport from './viewports'

export const parameters = {
  viewport,
  grid: { disable: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { date: /Date$/ } },
}
