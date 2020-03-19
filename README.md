# Force Design System

<a href="https://badge.fury.io/js/force-components"><img src="https://badge.fury.io/js/force-components.svg" alt="npm version" height="20"></a>
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Force/Force)


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
