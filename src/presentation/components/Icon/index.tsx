import { IconBaseProps } from 'react-icons';
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';

import { NotificationTypes } from '@/presentation/types/Notification';

interface IconProps extends IconBaseProps {
  type: NotificationTypes;
}

export const Icon = ({ type, ...iconProps }: IconProps): JSX.Element => {
  const Icons = {
    error: FiAlertCircle,
    warning: FiAlertTriangle,
    info: FiInfo,
    default: () => null,
    success: FiCheckCircle,
  };
  const SelectedIcon = Icons[type];

  return <SelectedIcon {...iconProps} />;
};
