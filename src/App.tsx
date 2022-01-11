import { globalStyles } from './presentation/assets/styles/global';
import { Notification } from './presentation/components/Notification';
import './main';

export const App = (): JSX.Element => {
  globalStyles();

  return (
    <div className="App">
      <Notification type="default" />
    </div>
  );
};
