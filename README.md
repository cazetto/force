# Force Design System

<p>
   https://forcesite.netlify.com/ <img align="right" src="https://percy.io/static/images/percy-badge.svg">
</p>

<p align="left">
  <img width="460" height="300" src="https://www.placecage.com/gif/284/196">
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
