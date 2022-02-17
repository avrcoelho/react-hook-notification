import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { NotificationType } from '../../../types/Notification';
import { Notification } from '..';

let mockWithIcon = true;
const mockWithProgressBar = true;
jest.mock('../useController', () => ({
  useController: () => ({
    withIcon: mockWithIcon,
    withProgressBar: mockWithProgressBar,
    onDragEnd: jest.fn(),
    onDragStart: jest.fn(),
    clickIsAllowed: true,
  }),
}));

const mockOnRemove = jest.fn();
const props = {
  type: 'success' as NotificationType,
  id: '124',
  text: 'text test',
  amount: 1,
  onRemove: mockOnRemove,
  draggable: true,
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

    expect(screen.getByLabelText(`Icon ${props.type}`)).toBeTruthy();
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

  it('should be able to render title', () => {
    Object.assign(props, {
      title: 'title test',
      draggable: false,
    });
    render(<Notification {...props} />);

    expect(screen.queryByText('title test')).toBeTruthy();
  });
});
