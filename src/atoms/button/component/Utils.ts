import clsx from 'clsx'
import { exists, Icon, Side } from '../../../_common'
import { IsDisabled, IsExternal, Tag, Type, Variant } from './Types'

export const url = (is_external: IsExternal): string => {
  return is_external === '_blank' ? 'external' : 'internal'
}

export const tag = (type: Type): Tag => (type === 'cta' ? 'button' : 'a')

export const visuals = (
  error: boolean,
  type: Type,
  side: Side,
  icon: Icon,
  variant: Variant,
  disabled: IsDisabled,
  className: string,
): string => {
  const hasIcon = exists(side) && exists(icon)
  const hasVariant = exists(variant)
  const isDisabled = exists(disabled) || error

  return clsx([
    type === 'cta' ? 'button' : type,
    hasVariant && variant,
    hasIcon && `-icon-${side}`,
    className,
    type !== 'cta' && isDisabled && '-disabled',
  ])
}

export const ClickHandler = (event: React.MouseEvent<HTMLElement>) => {
  const target = event?.currentTarget
  const isDisabled = target?.classList.contains('-disabled') || target.hasAttribute('disabled')
  const isPathfactory =
    (target.getAttribute('href')?.indexOf('//discover.talkdesk.com/') as number) > -1

  if (isDisabled) {
    event?.preventDefault()
    return
  }

  if (isPathfactory) {
    document.querySelector('body')?.classList.add('overflow-hidden')
  }
}
