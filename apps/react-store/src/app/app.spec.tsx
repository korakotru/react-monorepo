import { render } from '@testing-library/react';

import App from './app';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  // it('should have a greeting as the title', () => {
  //   const { getByText } = render(<App />);
  //   expect(getByText(/Welcome react-store/gi)).toBeTruthy();
  // });
});
