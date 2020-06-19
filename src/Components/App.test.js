import React from 'react';
import { render,unmountComponentAtNode } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import App from './App';

let container = null;
beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders  without crashing', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe("Invoice");
});
