# Force Design System

## Usage

`yarn add styled-components styled-system force-components -D`

### Example
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

## Contribute

### Run development mode

`git clone https://github.com/cazetto/force.git`

`cd force`

`yarn`

To run all packages simultaneously:

`yarn dev:all`

To run only the components package:

`yarn dev:components`

and maybe you need to see de components at browser running:

`yarn dev:docs`

if you need to change some design token run to compile jsons:

`yarn build:tokens`


### Run tests

`yarn test:all`

### Build

`yarn build:all`

### Commit message convention

1. Use the English language
2. Use Conventional Commits pattern for commit messages, it is specified in the url bellow.
   `https://www.conventionalcommits.org/`

### Branch name convention

Use:

- feat/[Github Feature Number]-[Short Resume] ⋅⋅⋅ For features being added;

  eg. `feat/1-project-patterns`

- bug/[Github Feature Number]-[Short Resume] ⋅⋅⋅ For bug fixes.

  eg. `bug/123-fix-something`

### Issue name convention

Use:

- Use `[Feature] - or [Bug] -` as prefix.

  eg. `[Feature] - Define project patterns`

  eg. `[Bug] - Fix something`
