import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { NotificationTypes } from '../../../constants/NotificationTypes';
import { Notification } from '..';

let mockWithIcon = true;
let mockWithProgressBar = true;
jest.mock('../useController', () => ({
  useController: () => ({
    withIcon: mockWithIcon,
    withProgressBar: mockWithProgressBar,
  }),
}));

const mockOnRemove = jest.fn();
const props = {
  type: NotificationTypes.Success,
  id: '124',
  text: 'text test',
  onRemove: mockOnRemove,
};
describe('Notification component', () => {
  it('should be able to render remove on click Notification', () => {
    render(<Notification {...props} />);

    fireEvent.click(screen.getByLabelText('Close notification'));

    expect(mockOnRemove).toBeCalledWith(props.id);
  });

  it('should not be able to render button close', () => {
    Object.assign(props, {
      showButtonClose: false,
    });
    render(<Notification {...props} />);

    expect(screen.queryByLabelText('Close notification')).toBeFalsy();
  });

  it('should be able to render icon', () => {
    render(<Notification {...props} />);

    expect(screen.getByLabelText(props.type)).toBeTruthy();
  });

  it('should not be able to render icon', () => {
    mockWithIcon = false;
    render(<Notification {...props} />);

    expect(screen.queryByLabelText(props.type)).toBeFalsy();
  });

  it('should not be able to render icon when type is default', () => {
    Object.assign(props, {
      type: 'default',
    });
    render(<Notification {...props} />);

    expect(screen.queryByLabelText(props.type)).toBeFalsy();
  });

  it('should be able to render progress bar', () => {
    render(<Notification {...props} />);

    expect(screen.getByLabelText('Progress bar')).toBeTruthy();
  });

  it('should not be able to render progress bar', () => {
    mockWithProgressBar = false;
    render(<Notification {...props} />);

    expect(screen.queryByLabelText('Progress bar')).toBeFalsy();
  });

  it('should be able to render title', () => {
    Object.assign(props, {
      title: 'title test',
    });
    render(<Notification {...props} />);

    expect(screen.queryByText('title test')).toBeTruthy();
  });
});
