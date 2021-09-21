import Button, { ButtonProps } from '../index'
import MockJson from '../__mocks__/storyMock.json'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const clickEvent = (event: any): any => {
  event.preventDefault()
  if (
    event.currentTarget.classList.contains('-disabled') ||
    event.currentTarget.hasAttribute('disabled')
  ) {
    return false
  }
}

export const button = () => {
  const props = MockJson as ButtonProps

  return (
    <div className="container-fluid">
      <div className={`row -pad-y-1 -bg--white`}>
        <div className="col-12">
          <div className="row">
            <div className="col-4 -pad-top-1 -text-center">
              <Button
                {...{
                  ...props,
                  icon: '' as any,
                  side: '' as any,
                }}
                onClick={clickEvent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
