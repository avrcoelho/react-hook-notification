import React from 'react';
import { IconBaseProps } from 'react-icons';
import { MdCheckCircle, MdWarning, MdInfo, MdError } from 'react-icons/md';

import { NotificationType } from '../../types/Notification';

interface IconProps extends IconBaseProps {
  type: NotificationType;
}

export const Icon = ({ type, ...iconProps }: IconProps): JSX.Element => {
  const Icons = {
    error: MdError,
    warning: MdWarning,
    info: MdInfo,
    default: () => null,
    success: MdCheckCircle,
  };
  const SelectedIcon = Icons[type];

  return <SelectedIcon {...iconProps} />;
};
