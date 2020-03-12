import React from 'react';
import { themePrimer, Button } from 'force-components';
import { ThemeProvider } from 'styled-components';
function App() {
  return (
    <ThemeProvider theme={themePrimer}>
      <div>
        <div style={{ display: 'inline-block', fontFamily: 'Times' }}>
          <Button
            ariaLabel="My talking button"
            variant="primary"
            m="4"
            size="xs"
            type="button"
            onClick={() => console.log('Button clicked')}
          >
            Force Button
          </Button>

          <Button variant="primary" m="4" size="sm">
            Force Button
          </Button>

          <Button variant="primary" m="4" size="md">
            Force Button
          </Button>

          <Button variant="primary" m="4" size="lg">
            Force Button
          </Button>

          <Button variant="primary" m="4" size="xl">
            Force Button
          </Button>

          <br />

          {/*  */}

          <Button variant="secondary" autoFocus={true} m="4" size="xs">
            Force Button
          </Button>

          <Button variant="secondary" m="4" size="sm">
            Force Button
          </Button>

          <Button variant="secondary" m="4" size="md">
            Force Button
          </Button>

          <Button variant="secondary" m="4" size="lg">
            Force Button
          </Button>

          <Button variant="secondary" m="4" size="xl">
            Force Button
          </Button>

          <br />

          {/*  */}

          <Button variant="tertiary" m="4" size="xs">
            Force Button
          </Button>

          <Button variant="tertiary" m="4" size="sm">
            Force Button
          </Button>

          <Button variant="tertiary" m="4" size="md">
            Force Button
          </Button>

          <Button variant="tertiary" m="4" size="lg">
            Force Button
          </Button>

          <Button variant="tertiary" m="4" size="xl">
            Force Button
          </Button>

          <br />

          {/*  */}

          <Button variant="warning" m="4" size="xs">
            Force Button
          </Button>

          <Button variant="warning" m="4" size="sm">
            Force Button
          </Button>

          <Button variant="warning" m="4" size="md">
            Force Button
          </Button>

          <Button variant="warning" m="4" size="lg">
            Force Button
          </Button>

          <Button variant="warning" m="4" size="xl">
            Force Button
          </Button>

          <br />

          {/*  */}

          <Button variant="danger" m="4" size="xs">
            Force Button
          </Button>

          <Button variant="danger" m="4" size="sm">
            Force Button
          </Button>

          <Button variant="danger" m="4" size="md">
            Force Button
          </Button>

          <Button variant="danger" m="4" size="lg">
            Force Button
          </Button>

          <Button variant="danger" m="4" size="xl">
            Force Button
          </Button>

          <br />

          <Button variant="primary" m="4" size="xs" disabled>
            Force Button
          </Button>

          <Button variant="secondary" m="4" size="sm" disabled>
            Force Button
          </Button>

          <Button variant="tertiary" m="4" size="md" disabled>
            Force Button
          </Button>

          <Button variant="warning" m="4" size="lg" disabled>
            Force Button
          </Button>

          <Button variant="danger" m="4" size="xl" disabled>
            Force Button
          </Button>

          <br />

          {/*  */}
        </div>

        <div style={{ display: 'inline-block', fontFamily: 'Times' }}>
          <Button
            variant="primary"
            outline={true}
            m="4"
            size="xs"
            type="submit"
          >
            Force Button
          </Button>

          <Button variant="primary" outline={true} m="4" size="sm">
            Force Button
          </Button>

          <Button variant="primary" outline={true} m="4" size="md">
            Force Button
          </Button>

          <Button variant="primary" outline={true} m="4" size="lg">
            Force Button
          </Button>

          <Button variant="primary" outline={true} m="4" size="xl">
            Force Button
          </Button>

          <br />

          {/*  */}

          <Button
            variant="secondary"
            outline={true}
            autoFocus={true}
            m="4"
            size="xs"
          >
            Force Button
          </Button>

          <Button variant="secondary" outline={true} m="4" size="sm">
            Force Button
          </Button>

          <Button variant="secondary" outline={true} m="4" size="md">
            Force Button
          </Button>

          <Button variant="secondary" outline={true} m="4" size="lg">
            Force Button
          </Button>

          <Button variant="secondary" outline={true} m="4" size="xl">
            Force Button
          </Button>

          <br />

          {/*  */}

          <Button variant="tertiary" outline={true} m="4" size="xs">
            Force Button
          </Button>

          <Button variant="tertiary" outline={true} m="4" size="sm">
            Force Button
          </Button>

          <Button variant="tertiary" outline={true} m="4" size="md">
            Force Button
          </Button>

          <Button variant="tertiary" outline={true} m="4" size="lg">
            Force Button
          </Button>

          <Button variant="tertiary" outline={true} m="4" size="xl">
            Force Button
          </Button>

          <br />

          {/*  */}

          <Button variant="warning" outline={true} m="4" size="xs">
            Force Button
          </Button>

          <Button variant="warning" outline={true} m="4" size="sm">
            Force Button
          </Button>

          <Button variant="warning" outline={true} m="4" size="md">
            Force Button
          </Button>

          <Button variant="warning" outline={true} m="4" size="lg">
            Force Button
          </Button>

          <Button variant="warning" outline={true} m="4" size="xl">
            Force Button
          </Button>

          <br />

          {/*  */}

          <Button variant="danger" outline={true} m="4" size="xs">
            Force Button
          </Button>

          <Button variant="danger" outline={true} m="4" size="sm">
            Force Button
          </Button>

          <Button variant="danger" outline={true} m="4" size="md">
            Force Button
          </Button>

          <Button variant="danger" outline={true} m="4" size="lg">
            Force Button
          </Button>

          <Button variant="danger" outline={true} m="4" size="xl">
            Force Button
          </Button>

          <br />

          <Button variant="primary" outline={true} m="4" size="xs" disabled>
            Force Button
          </Button>

          <Button variant="secondary" outline={true} m="4" size="sm" disabled>
            Force Button
          </Button>

          <Button variant="tertiary" outline={true} m="4" size="md" disabled>
            Force Button
          </Button>

          <Button variant="warning" outline={true} m="4" size="lg" disabled>
            Force Button
          </Button>

          <Button variant="danger" outline={true} m="4" size="xl" disabled>
            Force Button
          </Button>

          <br />

          {/*  */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
