import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { useEventListener } from '../useEventListener';

const mockHandler = jest.fn();
describe('useEventListener', () => {
  beforeEach(() => {
    mockHandler.mockClear();
  });
  it('should be able to call handler', () => {
    const Component = (): JSX.Element => {
      const elementRef = useEventListener<HTMLDivElement>('click', mockHandler);

      return <div ref={elementRef}>test</div>;
    };
    render(<Component />);

    fireEvent.click(screen.getByText('test'));

    expect(mockHandler).toBeCalled();
  });

  it('should not be able to call handler when is disabled', () => {
    const Component = (): JSX.Element => {
      const elementRef = useEventListener<HTMLDivElement>(
        'click',
        mockHandler,
        { disabled: true },
      );

      return <div ref={elementRef}>test</div>;
    };
    render(<Component />);

    fireEvent.click(screen.getByText('test'));

    expect(mockHandler).not.toBeCalled();
  });

  it('should be able to call handler when click on custom element', () => {
    const Component = (): JSX.Element => {
      const elementRef = useEventListener<HTMLDivElement>('click', mockHandler);

      return <div ref={elementRef}>test</div>;
    };
    render(<Component />);

    fireEvent.click(screen.getByText('test'));

    expect(mockHandler).toBeCalled();
  });
});
