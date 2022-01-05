import ReactDOM from 'react-dom';

import { Initialize } from '../Initialize';

const spiedRender = jest.spyOn(ReactDOM, 'render');

describe('Initialize', () => {
  const Component = () => <h1>Test</h1>;

  beforeEach(() => {
    spiedRender.mockClear();
  });

  it('should be able to render element', () => {
    const initialize = Initialize.getInstance();
    initialize.render(Component);

    expect(spiedRender).toBeCalled();
  });

  it('should not be able to rerender element', () => {
    const initialize = Initialize.getInstance();
    initialize.render(Component);

    expect(spiedRender).not.toBeCalled();
  });
});
