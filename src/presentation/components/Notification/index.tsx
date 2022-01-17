import { FiX } from 'react-icons/fi';
import { AnimatePresence, useCycle } from 'framer-motion';

import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationDefaultProps } from '@/presentation/constants/NotificationDefaultProps';
import { ContainerTheme, IconTheme } from '@/presentation/types/ContainerTheme';
import {
  colorsIcon,
  colorsIconButtonClose,
} from '@/presentation/constants/colorsIcon';
import { Icon } from '../Icon';

// blur
// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}
// transition={{ type: 'spring', bounce: 0 }}

// bounce
// initial={{ right: -380 }}
// animate={{ right: 16 }}
// exit={{ right: -380 }}
// transition={{ type: 'spring', bounce: 0.6, duration: 0.4 }}

// slide
// initial={{ right: -380 }}
// animate={{ right: 16 }}
// exit={{ right: -380 }}
// transition={{ type: 'spring', bounce: 0 }}

// fade
// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}
// transition={{ type: 'spring', bounce: 0 }}

// flip
// initial={{ rotateX: -90, opacity: 0, skewX: -20 }}
// animate={{ rotateX: 0, opacity: 1, skewX: 0 }}
// exit={{ rotateX: -90, opacity: 0, skewX: -20 }}
// transition={{ type: 'spring', bounce: 0.4, duration: 1 }}

import {
  Container,
  IconContainer,
  TextContainer,
  Title,
  Text,
  ButtonClose,
} from './styles';
import { animations } from '../../constants/animations';

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
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};
