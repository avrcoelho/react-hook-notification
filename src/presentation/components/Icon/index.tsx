import { IconBaseProps } from 'react-icons';
import { MdCheckCircle, MdWarning, MdInfo, MdError } from 'react-icons/md';

import { NotificationTypes } from '@/presentation/types/Notification';

interface IconProps extends IconBaseProps {
  type: NotificationTypes;
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
