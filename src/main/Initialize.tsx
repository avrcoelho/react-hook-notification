import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

export class Initialize {
  private static instance: Initialize;
  private Component: () => JSX.Element | null;

  private constructor() {
    this.Component = () => null;
  }

  static getInstance(): Initialize {
    if (!Initialize.instance) {
      Initialize.instance = new Initialize();
    }
    return Initialize.instance;
  }

  setComponent(component: () => JSX.Element) {
    this.Component = this.Component || component;
    return this;
  }

  render() {
    ReactDOM.render(
      <StrictMode>
        <this.Component />
      </StrictMode>,
      document.getElementById('rhn-container'),
    );
  }
}
