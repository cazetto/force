import React from 'react';
import {
  themePrimer,
  PrimerGlobalStyle,
  ForceThemeProvider,
  Button,
  Text
} from 'force-components';
function App() {
  console.log(Button, Text);

  return (
    <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
      {getTexts()}
      {getButtons()}
    </ForceThemeProvider>
  );
}

const getTexts = () => {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="div" fontSize="xs">
        <p>Extra Small</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>
      <Text as="div" fontSize="sm">
        <p>Small</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>
      <Text as="div" fontSize="md">
        <p>Medium</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>
      <Text as="div" fontSize="lg">
        <p>Large</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>
      <Text as="div" fontSize="xl">
        <p>Extra Large</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" fontWeight="100">
        <span>Medium 100</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" fontWeight="200">
        <span>Medium 200</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" fontWeight="300">
        <span>Medium 300</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" fontWeight="400">
        <span>Medium 400</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" fontWeight="500">
        <span>Medium 500</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" fontWeight="600">
        <span>Medium 600</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" fontWeight="700">
        <span>Medium 700</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" fontWeight="800">
        <span>Medium 800</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" fontWeight="900">
        <span>Medium 900</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatum odit accusantium voluptate. Ipsum distinctio accusamus a,
        expedita veniam repellendus possimus ab natus! Quisquam, dolor ipsa
        alias quidem quae perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam quo voluptatibus, veritatis assumenda delectus
        nesciunt suscipit fugit provident. Quam quo placeat, totam debitis
        suscipit vitae id velit libero eos non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, unde ipsam. Dolore aut odit,
        laboriosam fugit dignissimos id eaque, accusamus ab odio nam sed ullam
        reiciendis fugiat minus eum veniam.
      </Text>

      <Text as="p" color="colorBlue400" fontWeight="900" fontSize="lg">
        Color colorBlue400, font weight 900, font size lg
      </Text>
      <Text as="p" variant="primary">
        Primary
      </Text>
      <Text as="p" variant="secondary">
        Secondary
      </Text>
      <Text as="p" variant="tertiary">
        Tertiary
      </Text>
      <Text as="p" variant="info">
        Info
      </Text>
      <Text as="p" variant="warning">
        Warning
      </Text>
      <Text as="p" variant="danger">
        Danger
      </Text>
    </>
  );
};

const getButtons = () => {
  return (
    <div>
      <div style={{ display: 'inline-block' }}>
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

      <div style={{ display: 'inline-block' }}>
        <Button variant="primary" outline={true} m="4" size="xs" type="submit">
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
  );
};

export default App;
