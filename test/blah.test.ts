import * as ReactDOM from 'react-dom';

describe('blah', () => {
  it('works', () => {
    const div = document.createElement('div');
    ReactDOM.unmountComponentAtNode(div);
  });
});
