import { globalStyles } from './presentation/assets/styles/global';
import './main';
import { NotificationComponent } from './presentation/components/Notification';
import { NotificationComponent2 } from './presentation/components/Notification2';

export const App = (): JSX.Element => {
  globalStyles();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <NotificationComponent />
      <NotificationComponent2 />
    </div>
  );
};
