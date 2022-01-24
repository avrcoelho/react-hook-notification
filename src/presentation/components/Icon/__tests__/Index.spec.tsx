import React from 'react';
import { render, screen } from '@testing-library/react';

import { Icon } from '..';

describe('Icon', () => {
  it('should ba able to render error icon', () => {
    render(<Icon type="error" aria-label="error" />);

    expect(screen.getByLabelText('error')).toBeTruthy();
  });

  it('should ba able to render warning icon', () => {
    render(<Icon type="warning" aria-label="warning" />);

    expect(screen.getByLabelText('warning')).toBeTruthy();
  });

  it('should ba able to render success icon', () => {
    render(<Icon type="success" aria-label="success" />);

    expect(screen.getByLabelText('success')).toBeTruthy();
  });

  it('should ba able to render info icon', () => {
    render(<Icon type="info" aria-label="info" />);

    expect(screen.getByLabelText('info')).toBeTruthy();
  });

  it('should ba able to render default icon', () => {
    render(<Icon type="default" aria-label="default" />);

    expect(screen.queryByLabelText('default')).toBeFalsy();
  });
});
