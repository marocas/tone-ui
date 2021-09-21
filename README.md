# 👨‍🎨 `@td/tone-ui`  A easy-to-use react ui-kit

 <!-- badges -->


> A `ui-kit` that is used by our institutional app, but that can be applyed in any project based in React.

### 🗺 Roadmap 

Project is still in growth. Even do it is being used in production at the time you're reading, the're some improvements that are in roadmap to develop:

- [x]  Build and deployment
- [x]  Take advantage of CRA configuration


## 💻 Requisites

Before you start, make sure the following requisites to use `@td/tone-ui`:
* Your project must be based in `Javacript` or `Typescript`
* Your project should be using `React v17.x`
* You must add a [sass-loader todo]()
* Make sure you have `node-sass` installed in your project

## 🚀 Installing `@td/tone-ui`

To install `@td/tone-ui` in your project using `yarn`:
``` shell
yarn add @td/tone-ui
```

Using `npm`:
```
npm install --save @td/tone-ui
```

## ☕ Using `@td/tone-ui`

To use `tone-ui` in your app, do the following:
* Add the following to your app entrypoint:
``` typescript
import '@td/tone-ui/_assets/styles/index.scss'
```

Then you can use any of the components that are present in this `ui-kit`, example:
``` typescript
import Button from '@td/tone-ui/atoms/button/Button'

const Component = ({ props }) => <Button {...props} />
```

## 🤝 Colaborators

Thanks in advance to the people that continue contributing to this project:

## 😄 Do you want to be part of this family?

Checkout the [CONTRIBUTING.md](./CONTRIBUTING.md).

[⬆ back to top!](#tone-ui)<br>
