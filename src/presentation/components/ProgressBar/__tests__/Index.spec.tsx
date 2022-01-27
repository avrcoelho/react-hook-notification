import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { ProgressBar } from '..';

describe('ProgressBar', () => {
  it('should be able to call onremove after finish animation', async () => {
    const mockOnRemove = jest.fn();
    render(
      <ProgressBar
        delay={5000}
        theme="colored"
        type="success"
        id="test-id"
        onRemove={mockOnRemove}
        autoClose
        isPaused={false}
        show
      />,
    );

    fireEvent.animationEnd(screen.getByLabelText('Progress bar'));

    expect(mockOnRemove).toBeCalled();
  });

  it('should not be able to call onremove after finish animation', async () => {
    const mockOnRemove = jest.fn();
    render(
      <ProgressBar
        delay={5000}
        theme="colored"
        type="success"
        id="test-id"
        onRemove={mockOnRemove}
        autoClose={false}
        isPaused
        show={false}
      />,
    );

    fireEvent.animationEnd(screen.getByLabelText('Progress bar'));

    expect(mockOnRemove).not.toBeCalled();
  });
});
