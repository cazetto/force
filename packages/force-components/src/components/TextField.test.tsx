import React from 'react';
import { render } from '@testing-library/react';
import { TextField } from './TextField';

function setup(props?: {}) {
  return render(<TextField {...props} />);
}

describe('TextField Component', () => {
  test('should renders without errors', () => {
    const textField = setup();
    expect(textField).toBeTruthy();
  });
});
