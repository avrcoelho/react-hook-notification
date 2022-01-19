import { render } from '@testing-library/react';

import { NotificationThemes } from '@/presentation/constants/NotificationThemes';
import { NotificationTypes } from '@/presentation/constants/NotificationTypes';
import { ProgressBar } from '..';

describe('ProgressBar', () => {
  it('should ba able to render component', () => {
    expect(() => {
      render(
        <ProgressBar
          delay={5000}
          theme={NotificationThemes.Colored}
          type={NotificationTypes.Success}
        />,
      );
    });
  });
});
