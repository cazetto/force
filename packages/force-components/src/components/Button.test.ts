import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../index';

test('Renders', async () => {
  const { getByRole } = render(<Button />);
  expect(getByRole('button')).toHaveTextContent('Button');
});
