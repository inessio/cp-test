import React from 'react';
import { render,unmountComponentAtNode } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import NavTop from './NavTop';

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
  act(() => {
    render(<NavTop />, container);
  });
  expect(container.textContent).toBe("Admin Setting");
});
