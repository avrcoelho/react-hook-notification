import { globalStyles } from './presentation/assets/styles/global';
import { Notification } from './presentation/components/Notification';
import './main';

export const App = (): JSX.Element => {
  globalStyles();

  return <Notification type="success" theme="colored" />;
};
