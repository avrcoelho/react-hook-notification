import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

export class Initialize {
  private static instance: Initialize;

  private hasComponent = false;

  private Component: () => JSX.Element | null;

  private constructor() {
    this.Component = () => null;
  }

  private createElement() {
    const element = document.createElement('div');
    element.setAttribute('id', 'rhn-container');
    document.body.appendChild(element);
  }

  static getInstance(): Initialize {
    if (!Initialize.instance) {
      Initialize.instance = new Initialize();
    }
    return Initialize.instance;
  }

  private setComponent(component: () => JSX.Element) {
    this.Component = component;
  }

  private removeElementIfExists(): void {
    document.getElementById('rhn-container')?.remove();
  }

  render(component: () => JSX.Element) {
    if (!this.hasComponent) {
      this.hasComponent = true;
      this.setComponent(component);
      this.removeElementIfExists();
      this.createElement();
      ReactDOM.render(
        <StrictMode>
          <this.Component />
        </StrictMode>,
        document.getElementById('rhn-container'),
      );
    }
  }
}
