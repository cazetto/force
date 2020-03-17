import React from 'react';
import {
  themePrimer,
  PrimerGlobalStyle,
  ForceThemeProvider,
  Box,
  Button,
  Text
} from 'force-components';

const GlobalStyle = <PrimerGlobalStyle />;

function App() {
  return (
    <ForceThemeProvider theme={themePrimer} globalStyle={GlobalStyle}>
      <Box
        display="flex"
        bg="colorGray900"
        height="50vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        px="4"
      >
        <Text
          as="div"
          color="colorBlue400"
          fontSize={{ xs: '28px', sm: '48px', md: '56px' }}
          fontWeight="700"
          textAlign="center"
          mb="4"
        >
          🛸 Force Design System 🛸
        </Text>

        <Text
          as="div"
          color="colorBlue000"
          fontSize={{ xs: 'sm', sm: 'md', md: 'lg' }}
          fontWeight="300"
          textAlign="center"
          lineHeight="30px"
          mb="4"
        >
          An <Text as="span" fontWeight="400"></Text>{' '}
          <Text as="span" color="colorBlue000">
            Open Sourced
          </Text>{' '}
          <Text as="span" color="colorBlue400">
            Design System
          </Text>{' '}
          using{' '}
          <Text as="span" color="colorBlue000">
            Styled Components 💅
          </Text>{' '}
          and{' '}
          <Text as="span" color="colorBlue000">
            Styled System 🔌
          </Text>
        </Text>

        <Text fontWeight="300" color="colorBlue000" mb="4">
          Use the components or Build your Own Over the Force Monorepo
        </Text>
        <div>
          <Button
            as="a"
            href="https://github.com/cazetto/force"
            target="_blank"
            variant="tertiary"
            outline
          >
            Clone
          </Button>
          <Text as="span" ml="2" mr="2" color="colorBlue000">
            or
          </Text>
          <Button
            variant="danger"
            as="a"
            alt="Danger"
            href="https://www.npmjs.com/package/force-components"
            target="_blank"
            outline
          >
            Install
          </Button>
        </div>
      </Box>
      <Box
        display="flex"
        bg="colorBlue100"
        height="45vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      ></Box>

      <Box
        display="flex"
        bg="colorBlue100"
        height="5vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text textAlign="center">
          <Text as="span" fontSize="xs">
            v0.0.3 -{' '}
          </Text>
          Made with love 💙
        </Text>
      </Box>
    </ForceThemeProvider>
  );
}

export default App;
