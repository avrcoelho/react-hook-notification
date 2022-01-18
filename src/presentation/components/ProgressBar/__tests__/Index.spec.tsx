import { render } from '@testing-library/react';

import { ProgressBar } from '..';

describe('ProgressBar', () => {
  it('should ba able to render component', () => {
    expect(() => {
      render(<ProgressBar delay={5000} />);
    });
  });
});
