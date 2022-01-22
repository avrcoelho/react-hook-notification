import React from 'react';
import { render } from '@testing-library/react';

import { NotificationThemes } from '../../../constants/NotificationThemes';
import { NotificationTypes } from '../../../constants/NotificationTypes';
import { ProgressBar } from '..';

describe('ProgressBar', () => {
  it('should ba able to render component', () => {
    expect(() => {
      render(
        <ProgressBar
          delay={5000}
          theme={NotificationThemes.Colored}
          type={NotificationTypes.Success}
        />
      );
    });
  });
});
