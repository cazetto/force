# Force Design System

<a href="https://badge.fury.io/js/force-components"><img src="https://badge.fury.io/js/force-components.svg" alt="npm version" height="20"></a>
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Force/Force)


## It uses
<p float="left">
    <a href="https://www.typescriptlang.org"><img height="34" src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" /></a>
  <a href="https://reactjs.org/"><img height="38" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" /></a>
    <a href="https://styled-components.com"><img height="44" src="https://styled-components.com/favicon.png" /></a>
  <a href="https://storybook.js.org/"><img height="40" src="https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png" /></a>
  <a href="https://percy.io/"><img height="42" src="https://www.saashub.com/images/app/service_logos/16/9738bbfbfe44/large.png?1539856066" /></a>

</p>

## Usage

`yarn add styled-components styled-system force-components -D`

### Button Example
```javascript
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themePrimer, Button } from 'force-components';

function App() {
  return (
    <ThemeProvider theme={themePrimer}>
      <Button variant="secondary" m={4}>
        Force Button
      </Button>
    </ThemeProvider>
  );
}

export default App;
```
