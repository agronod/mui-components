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

```bash
npm install

# Node version > 16
npm run storybook

# OR node version < 17
npm run storybook@legacy
```

## Integrating

> npm install --save @agronod/mui-components

### Dependencies

The following packages needs to be installed as dependencies in the consuming application:

```json
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/icons-material": "^5.15.18",
    "@mui/lab": "^5.0.0-alpha.123",
    "@mui/material": "^5.15.18",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "6.23.1",
    "recharts": "^2.4.1"
```

Mui/lab ensures that we are using correct mui theme from agronod package and not default theme.

## Usage

```javascript
// Wrap as soon as possible in the component tree
import ThemeProvider from "@agronod/mui-components";

const Component = () => {
  <StyledEngineProvider injectFirst>
  // We have three temes that can be used right now: AgronodTheme, AgrosphereTheme, AgrosphereDarkTheme
  <ThemeProvider options={yourSelectedTheme}> 
    <App />
  </ThemeProvider>;
   </StyledEngineProvider>
};
```

### useTheme

**useTheme** is available in a consuming application when using Mui/lab as dependency. Theme object can be used two ways on top of components as *useTheme()* or in *sx* props.

```jsx
const theme = useTheme();
const isTablet = useMediaQuery(theme.breakpoints.down("md"));
backgroundColor={theme.palette.secondary.main}
#or
<Button sx={{(theme)=>({ p: theme.spacing(1) })}} />
#or
<Button sx={{ p: (theme) => theme.spacing(1) }}} />
```

## Props

### ThemeProvider

- **options** optional

  > Pass options or overrides to the base theme.
  > This is so that each project can configure the library to their own profile.

## Updating package

While developing a feature branch we can publish -alpha.n versions (0.1.2-alpha.3) fore testing purposes. After the feature is merged into main we publish the resulting version 0.1.2.

Versions should follow [semver](https://semver.org/)

- You need a personal token with read and write access. The token can be created [here](https://github.com/settings/tokens)
- Set a global variable called "REACT_APP_GITHUB_TOKEN" for your shell of choice.
- run **"npm login --scope=@agronod --registry=https://npm.pkg.github.com"** and follow instructions
- make sure your project is clean, tested and updated with the intended functionality
- Test that all updates are in place and functioning
- run **npm run build**
- run **npm version "preferred version"**
- run **npm publish**

## Write stories
- Every component should have main component file and story file
.
└── Root/
    └── src/
        ├── assets
        └── components/
            └── ComponentFolder/
                ├── Component.tsx
                ├── Component.stories.tsx
                ├── index.ts
                ├── MockData.ts (if any)
                └── components/
                    └── ChildComponent(if any)

- In story file we should have simmilars structure ex.: 
```jsx
import { StoryFn, Meta } from "@storybook/react";
import Component from "./Component";

export default {
  title: "Component folder/Component name",
  component: Component,
  parameters: {
    componentSubtitle:
      "What is component main purpose",
    docs: {
      description: {
        component: `<div><p>Here we can add additional information about component, notes, warnings.</p></div>`,
      },
    },
  },
  // Arguments which are shown in control section with their description and default values
  argTypes: {
    children: {
      description: "will override automatic description if any exist",
      control: {
        type: "look for types of controles in storybook in storybook",
        required: true,
      },
    },
  },
} as Meta<typeof Component>;

export const ComponentDefault: StoryFn<typeof Component> = ({ separateProperty, ...rest }) => (
  <Component separateProperty={...separateProperty} {...rest}/>
);
#or
export const ComponentDefault: StoryFn<typeof Component> = (props) => (
  <Component {...props}/>
);

ComponentDefault.args = {
  arg1: "Lorem Ipsum",
  arg2: "LoremIpsum",
};

export const ComponentWithOtherParameters: StoryFn<typeof Component> = ({ separateProperty, ...rest }) => (
  <Component {...rest}>{separateProperty}</Component>
);

ComponentWithOtherParameters.args = {
  arg1: "Lorem Ipsum",
  arg2: "LoremIpsum",
  arg3: "LoremIpsum",
};
```
