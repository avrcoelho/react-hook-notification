import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

const customDocument = typeof document !== 'undefined' ? document : null;

export class Initialize {
  private static instance: Initialize;

  private hasComponent = false;

  private Component: null | (() => JSX.Element);

  private constructor() {
    this.Component = null;
  }

  private createElement(): void {
    const element = customDocument?.createElement('div');
    element?.setAttribute('id', 'rhn-container');
    customDocument?.body.appendChild(element as HTMLElement);
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
    customDocument?.getElementById('rhn-container')?.remove();
  }

  render(component: () => JSX.Element): void {
    const canRender = !this.hasComponent && customDocument;
    if (canRender) {
      this.hasComponent = true;
      this.setComponent(component);
      this.removeElementIfExists();
      this.createElement();
      ReactDOM.render(
        <StrictMode>{this.Component && <this.Component />}</StrictMode>,
        customDocument.getElementById('rhn-container'),
      );
    }
  }
}
