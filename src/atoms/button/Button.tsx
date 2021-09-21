import { VFC } from 'react'
import { exists, Icon, Side } from '../../_common'
import { Defaults, Props, Utils } from './component'
import { visuals } from './component/Utils'
import './styles/Button.scss'

const Button: VFC<Props> = ({
  side,
  icon,
  label,
  styles,
  action,
  iconSize = '24',
  href,
  title,
  rel,
  css_class,
  type = Defaults.type,
  error = Defaults.error,
  target = Defaults.target,
  variant = Defaults.variant,
  onClick = Utils.ClickHandler,
  disabled = Defaults.disabled,
  className = Defaults.className,
  ...props
}) => {
  const ButtonTag = Utils.tag(type)
  const hasIcon = exists(side) && exists(icon)

  return (
    <ButtonTag
      style={{ ...(styles && styles) }}
      className={visuals(error, type, side as Side, icon as Icon, variant, disabled, className)}
      title={title && title}
      target={typeof action === 'undefined' || type !== 'cta' ? target : undefined}
      rel={rel && rel}
      onClick={onClick}
      type={action}
      disabled={type === 'cta' && disabled}
      // @ts-ignore
      href={href || props[`url_${Utils.url(target)}`]}
    >
      {css_class === 'player' ? (
        <i className={`icon-ui-play -size-${iconSize}`}></i>
      ) : (
        <>
          {hasIcon && <i className={`icon-${icon} -size-${iconSize}`}></i>}
          <span className="button--label">{label}</span>
        </>
      )}
    </ButtonTag>
  )
}

export default Button
