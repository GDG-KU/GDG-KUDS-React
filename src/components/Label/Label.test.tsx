import { render, screen } from '@testing-library/react';
import Label from './Label';
import '@testing-library/jest-dom';

test('Label Test', () => {
  render(<Label className='Label-test'>Test-Label</Label>);
  const LabelEl = screen.getByText('Test-Label');

  expect(LabelEl).toBeInTheDocument();
});
