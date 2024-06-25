# Agronod Design System

For the documentation of components we use Storybook together with Chromatic.
This is mainly to use battle tested standards that already have extensive support and documentation.

Visit our [Storybook](https://main--626a5b4b1abebb004a4657a8.chromatic.com) library.

This library is meant to provide two things:

- Prestyled components that align with Agronods style profile
- Documentation and visualization for the components

It is built on top of <b>[Material UI](https://mui.com/getting-started/usage/)</b>.
This way we can make use of an wide range of prebuilt components that we know follow [Material Designs](https://material.io/design) thuroughly tested and documented standards.
Stories are written in CSF format <b>[See more](https://storybook.js.org/docs/api/csf)</b>
<b>[Storybook API References](https://storybook.js.org/docs/api)</b>

## Component principles

- Think LEGO blocks :)
- If a component seems to get big, see if it should be broken up into several smaller reusable components
- If a component seems to be very specific, see if it could take properties to make it reusable for more use cases

## Running project

```bash
npm install

# Node version > 18
npm run storybook
```

## Changelog

- Our CHANGELOG.md tracks all the commits that were made and storybook users can see what each version brings.
- To make sure we have always lates updates we should before merging each branch run changelog update:

1. Push changes to your feature branch
2. Pull new version generated to gitHub workflow
3. Run:

```bash
npm run changelog
```

4. Commit new CHANGELOG.md

## Integrating as design system in project

- To be able to use this component library you need to install it as npm package with certain dependencies that are required for it to work properly.
- <b>Since library has limited use, you need to have correct github authorization token and correct setup in <code>.npmrc</code> file to be able to install and use it.</b>

### Updating package

While developing a feature branch we can publish -alpha.n versions (0.1.2-alpha.3) for testing purposes. After the feature is merged into main we publish the resulting version 0.1.2.

Versions should follow [semver](https://semver.org/)

- You need a personal token with read and write access. The token can be created [here](https://github.com/settings/tokens)
- Set a global variable called "REACT_APP_GITHUB_TOKEN" for your shell of choice.
- run **"npm login --scope=@agronod --registry=https://npm.pkg.github.com"** and follow instructions
- make sure your project is clean, tested and updated with the intended functionality
- Test that all updates are in place and functioning
- run **npm run build**
- run **npm version "preferred version"**
- run **npm publish**

### Installing

> npm install --save @agronod/mui-components

or specific version

> npm install @agronod/mui-components@a.bc.d

for testing purposes

> npm install @agronod/mui-components@0.1.2-alpha.3

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

##### Mui/lab ensures that we are using correct mui theme from agronod package and not default theme.

### Base Wrapper for all components

To get all themes and styles wrap all components preferably in <code>App.tsx</code> file.

#### ThemeProvider

> Pass options or overrides to the base theme. This is so that each project can configure the library to their own profile.

```javascript
// Wrap as soon as possible in the component tree
import ThemeProvider from "@agronod/mui-components";

const App = () => {
  <StyledEngineProvider injectFirst>
    // We have three themes that can be used right now: AgronodTheme,
    AgrosphereTheme, AgrosphereDarkTheme
    <ThemeProvider options={yourSelectedTheme}>
      <App />
    </ThemeProvider>;
  </StyledEngineProvider>;
};
```

### Theme setup

- All base setups for styles, colors, fonts, ThemeProvider... are in <code>Theme</code> folder.
- **_baseTheme.ts_** contains base styling that will be applied on all components.
- Alongside baseTheme there are separate theme files ex. _agronodTheme.ts_ that applies styles only on selected theme.

### useTheme

**useTheme** is option available in a consuming application when using Mui/lab as dependency. Theme object can be used two ways on top of components as _useTheme()_ or in _sx_ props.

```jsx
const theme = useTheme();
const isTablet = useMediaQuery(theme.breakpoints.down("md"));
backgroundColor={theme.palette.secondary.main}
#or
<AgronodButton sx={{(theme)=>({ p: theme.spacing(1) })}} />
#or
<AgronodButton sx={{ p: (theme) => theme.spacing(1) }}} />
```

### How to use components

- How to use each component is explained in the **_About_** section on components story where we can find component name and basic parameters.
- We import components from <code>import { AgronodComponent } from "@agronod/mui-components";</code>.
- **_NOTE:_** In current version we have mix so we import components from MUI to ex: <code>import {Box} from "@mui/material";</code> which will be removed later.
- **_NOTE:_** So that we do not confuse custom componets with MUI and where to import them from our custom components are named with Agronod prefix ex: AgronodCheckbox vs Checkbox (MUI).

## How to write stories

- Every component should have main component file and story file.
- Name of component should be prefixed with **_Agronod_** (ex. AgronodCheckbox, AgronodButton etc...) so it differs from MUI versions when importing.<br/>

```jsx
Root/
└── src/
    ├── assets
    ├── components/
    │   └── ComponentFolder/
    │       ├── Component.tsx
    │       ├── Component.stories.tsx
    │       ├── index.ts
    │       ├── MockData.ts (if any)
    │       └── components/
    │           └── ChildComponent (if any)
    ├── introPages/
    │   └── Component.mdx
```

### Story file

- There is several different types of story that we use.

1. **_Intro pages stories_** - written in **_.mdx_** format.
2. **_Design tokens stories_** - that are displaying our design tokens used (ex: colors, borders, shadows, etc...)
3. **_Component stories_** - actual component that can be imported and used with different parameters.

#### Component story

Each Component story should have

1. Title - component place and name
2. Subtitle - short about component
3. Description - component usage, where, how, which project
4. Changeable arguments
5. Arguments description for each one
6. Docs section code display that you can copy

#### Example of Component story:

```jsx
import { StoryFn, Meta } from "@storybook/react";
import Component from "./Component";

// When description is longer and we want to style it add images and format it better that in one line, we can extract it in variable like in example below
const componentDescription = `<div>
<p>Other icons are from <a href="https://mui.com/material-ui/material-icons/" target="_blank">Material UI </a> <b> (use “round” variation when possible)</b>.</p>
<p>From design, we should extract 24x24 so it matches with MUI.</p>
<p><b>Good example:</b></p>
<img src="/src/assets/extractionIconExample.png" />
<p>Ensure the <code>fill</code> property in the SVG is utilized correctly to allow for dynamic color assignment to the icon shapes, ensuring the icons appear correctly within the application.</p>
<p>To display an icon in this story, you need to:</p>
<p>1. Add the icon to the stack render section in the <code>AgronodIcons</code> story</p>
<p>2. Add the icon name to the dropdown options in the <code>argTypes.name.options</code> array.</p>
</div>`;

export default {
  title: "Component folder/Component name",
  component: Component,
  parameters: {
    componentSubtitle:
      "What is component main purpose",
    docs: {
      description: {
        component: `<div><p>Here we can add additional information about component, notes, warnings.</p></div>` #or componentDescription,
      },
    },
  },
  // Arguments which are shown in control section with their description and default values
  argTypes: {
    children: {
      description: "will override automatic description if any exist",
      control: {
        type: "look for types of controls in storybook in storybook",
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

### Component File

- In component file we import component from MUI, style it accordingly and export together with component prop types so it can be consumed.
- For component to be consumed we need to export them from _index.ts_ in _components_ folder.

#### Base component structure looks like this:

```jsx
import { Component as MuiComponent, ComponentProps as MuiComponentProps } from '@mui/material';

export interface AgronodCommponentProps extends MuiCommponentProps {
  componentCustomProp: componentCustomPropType
}

const AgronodCommponent = (props: AgronodCommponentProps) => (
  <MuiComponent
   {...props}
  />
);

export default AgronodCommponent;
```

####Support for showing just selected props from MUI looks like this:

```jsx
import { Component as MuiComponent, ComponentProps as MuiComponentProps } from '@mui/material';

type AgronodMuiComponentBaseProps = Pick<
  MuiComponentProps,
  "size" | "color" | "disabled" | "checked" | "onChange" | "onClick" // Storybook will show these selected props in controls and not all that are in MUI - more at https://storybook.js.org/recipes/@mui/material
>;

export interface AgronodComponentProps extends AgronodMuiComponentBaseProps {
  prop1: prop1Type;
  prop2: prop2Type;
}

const AgronodComponent = (props: AgronodComponentProps) => {
    return <MuiComponent {...props}>{props.prop1}</MuiComponent>
};

export default AgronodComponent;
```
