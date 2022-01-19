import { render, screen } from '@testing-library/react';

import { NotificationTypes } from '@/presentation/constants/NotificationTypes';
import { Icon } from '..';

describe('Icon', () => {
  it('should ba able to render error icon', () => {
    render(<Icon type={NotificationTypes.Error} aria-label="error" />);

    expect(screen.getByLabelText('error')).toBeTruthy();
  });

  it('should ba able to render warning icon', () => {
    render(<Icon type={NotificationTypes.Warning} aria-label="warning" />);

    expect(screen.getByLabelText('warning')).toBeTruthy();
  });

  it('should ba able to render success icon', () => {
    render(<Icon type={NotificationTypes.Success} aria-label="success" />);

    expect(screen.getByLabelText('success')).toBeTruthy();
  });

  it('should ba able to render info icon', () => {
    render(<Icon type={NotificationTypes.Info} aria-label="info" />);

    expect(screen.getByLabelText('info')).toBeTruthy();
  });

  it('should ba able to render default icon', () => {
    render(<Icon type={NotificationTypes.Default} aria-label="default" />);

    expect(screen.queryByLabelText('default')).toBeFalsy();
  });
});
