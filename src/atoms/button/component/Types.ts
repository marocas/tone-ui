import { CSSProperties } from 'react'
import { Color, Icon, Rel, Side, Target } from '../../../_common'

export type Variant = '-primary' | '-secondary'
export type VariantLiteral = { [key in Variant]?: key }
export type TAction = 'submit' | 'reset' | 'button' | undefined
export type Type = 'button' | 'link' | 'cta'
export type TypeLiteral = { [key in Type]?: key }
export type IsExternal = Target
export type IsDisabled = boolean
export type IsError = boolean
export type OnClick = (...args: any) => any
export type Tag = 'a' | 'button'
export type TIconSize = '16' | '24'

// FIXME: extends ButtonHTMLAttributes<HTMLButtonElement>
// fix all inherit errors
export interface Props {
  type?: Type
  icon?: Icon
  iconSize?: TIconSize
  side?: Side
  error?: IsError
  color?: Color
  href?: string
  title?: string
  rel?: Rel
  styles?: CSSProperties
  label?: string
  action?: TAction
  target?: IsExternal
  variant?: Variant
  onClick?: OnClick
  disabled?: IsDisabled
  css_class?: string
  className?: string
}

export interface DefaultProps {
  icon: Icon
  iconSize: TIconSize
  type: Type
  side: Side
  error: IsError
  color: Color
  label: string
  target: IsExternal
  variant: Variant
  onClick: OnClick
  disabled: IsDisabled
  css_class: string
  className: string
}
