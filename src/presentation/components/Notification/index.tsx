import { FiX } from 'react-icons/fi';
import { AnimatePresence, useCycle } from 'framer-motion';

import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationDefaultProps } from '@/presentation/constants/NotificationDefaultProps';
import { ContainerTheme } from '@/presentation/types/ContainerTheme';
import {
  colorsIcon,
  colorsIconButtonClose,
} from '@/presentation/constants/colorsIcon';
import { Icon } from '../Icon';

import {
  Container,
  IconContainer,
  TextContainer,
  Title,
  Text,
  ButtonClose,
} from './styles';
import { animations } from '../../constants/animations';
import { ProgressBar } from '../ProgressBar';

export const Notification = ({
  type,
  position = NotificationDefaultProps.position,
  theme = NotificationDefaultProps.theme,
  transition = NotificationDefaultProps.transition,
  delay = NotificationDefaultProps.delay,
  showProgressBar = NotificationDefaultProps.showProgressBar,
  showButtonClose = NotificationDefaultProps.showButtonClose,
  closeOnClick = NotificationDefaultProps.closeOnClick,
  showIcon = NotificationDefaultProps.showIcon,
}: NotificationProps): JSX.Element => {
  const withIcon = type === 'default' ? false : showIcon;
  const themeSelected: ContainerTheme = `${type}-${theme}`;

  const [isVisible, onCycle] = useCycle(false, true);

  return (
    <>
      <button type="button" onClick={() => onCycle()}>
        toggle
      </button>
      <AnimatePresence>
        {isVisible && (
          <Container
            theme={themeSelected}
            position={position}
            role={type}
            key="child"
            {...animations[transition][position]}
          >
            {withIcon && (
              <IconContainer>
                <Icon type={type} size={20} color={colorsIcon[theme][type]} />
              </IconContainer>
            )}

            {showButtonClose && (
              <ButtonClose
                type="button"
                theme={theme}
                onClick={() => onCycle()}
              >
                <FiX
                  type={type}
                  size={15}
                  color={colorsIconButtonClose[theme]}
                />
              </ButtonClose>
            )}

            <TextContainer withIcon={withIcon ? 'true' : 'false'}>
              <Title>
                Notification title is here Notification title is here
              </Title>
              <Text>
                Notification title is here Notification title is here
                Notification title is here Notification title is here
                Notification title is here Notification title is here
              </Text>
            </TextContainer>

            {showProgressBar && <ProgressBar delay={delay} />}
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};
