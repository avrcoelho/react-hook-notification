import { globalStyles } from '@/presentation/assets/styles/global';
import '@/main';
import { Notifications } from '@/presentation/components/Notifications';

export const App = (): JSX.Element => {
  globalStyles();

  return <Notifications />;
};
