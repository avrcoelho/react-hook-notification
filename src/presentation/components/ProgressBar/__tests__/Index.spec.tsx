import React from 'react';
import { render, act, screen } from '@testing-library/react';

import { ProgressBar } from '..';

jest.useFakeTimers();

describe('ProgressBar', () => {
  it('should ba able to render component', async () => {
    render(<ProgressBar delay={5000} theme="colored" type="success" />);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.getByLabelText('Progress bar')).toBeTruthy();
  });
});
