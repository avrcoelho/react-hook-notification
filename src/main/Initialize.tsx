import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

export class Initialize {
  private static instance: Initialize;

  private hasComponent = false;

  private Component: null | (() => JSX.Element);

  private constructor() {
    this.Component = null;
  }

  private createElement(): void {
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

  private setComponent(component: () => JSX.Element): void {
    this.Component = component;
  }

  private removeElementIfExists(): void {
    document.getElementById('rhn-container')?.remove();
  }

  render(component: () => JSX.Element): void {
    if (!this.hasComponent) {
      this.hasComponent = true;
      this.setComponent(component);
      this.removeElementIfExists();
      this.createElement();
      ReactDOM.render(
        <StrictMode>{this.Component && <this.Component />}</StrictMode>,
        document.getElementById('rhn-container'),
      );
    }
  }
}
