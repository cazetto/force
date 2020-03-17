# Force Design System

https://forcesite.netlify.com/

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
