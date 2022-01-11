import { globalStyles } from './presentation/assets/styles/global';
import './main';
import { Notification } from './presentation/components/Notification';

export const App = (): JSX.Element => {
  globalStyles();

  return (
    <div className="App">
      <Notification type="default" />
    </div>
  );
};
