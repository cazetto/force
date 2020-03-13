import primerTheme from './primer';

describe('Primer Theme', () => {
  it('need to match snapshot', () => {
    expect(primerTheme).toMatchSnapshot();
  });
});
