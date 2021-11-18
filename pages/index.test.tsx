import { render, screen } from '@testing-library/react';
import Index from 'pages/index';

test('renders leran react page', () => {
  render(<Index />);
  const divEle = screen.getByText(/hello world/i);
  expect(divEle).toBeTruthy();
});
