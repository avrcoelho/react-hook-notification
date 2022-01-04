import { render } from '@testing-library/react';

import { Notification } from '..';

it('test', () => {
  expect(() => {
    render(<Notification />);
  }).not.toThrow();
});
