import { DefaultProps, TypeLiteral, VariantLiteral } from './Types'

const Defaults: DefaultProps = {
  type: 'button',
  icon: 'ui-caretright',
  iconSize: '24',
  side: 'left',
  error: false,
  label: 'Button',
  color: 'darkblue',
  variant: '-primary',
  target: '_self',
  disabled: false,
  css_class: 'button',
  className: '',
  onClick: () => null,
}

export const VariantProps: VariantLiteral = {
  '-primary': '-primary',
  '-secondary': '-secondary',
}

export const TypeProps: TypeLiteral = {
  button: 'button',
  link: 'link',
  cta: 'cta',
}

export default Defaults
