# Agronod MUI components

Visit the [Storybook](https://main--626a5b4b1abebb004a4657a8.chromatic.com)

This library is meant to provide two things:

- Prestyled components that align with Agronods style profile
- Documentation and visualization for the components

It is built on top of [Material UI](https://mui.com/getting-started/usage/).
This way we can make use of an wide range of prebuilt components that we know follow [Material Designs](https://material.io/design) thuroughly tested and documented standards.

## Component principles

- Think LEGO blocks :)
- If a component seems to get big, see if it should be broken up into several smaller reusable components
- If a component seems to be very specific, see if it could take properties to make it resulable for more use cases

## Documentation

For the documentation we use Storybook together with Chromatic.
This is mainly to use battle tested standards that already have extensive support and documentation.

## Running

> npm install

_make sure you are using node 16 before running the project_

> npm run storybook

## Integrating

> npm install --save @agronod/mui-components

## Usage

```javascript
// Wrap as soon as possible in the component tree
import ThemeProvider from "@agronod/mui-components";

const Component = () => {
  <ThemeProvider>
    <App />
  </ThemeProvider>;
};
```

## Props

### ThemeProvider

- **options** optional

  > Pass options or overrides to the base theme.
  > This is so that each project can configure the library to their own profile.

## Updating package

- You need a personal token with read and write access. The token can be created [here](https://github.com/settings/tokens)
- Set a global variable called "REACT_APP_GITHUB_TOKEN" for your shell of choice.
- run **"npm login --scope=@agronod --registry=https://npm.pkg.github.com"** and follow instructions
- make sure your project is clean, tested and updated with the intended functionality
- Test that all updates are in place and functioning
- run **npm run build:tsc**
- run **npm version "preferred version"**
- run **npm publish**
