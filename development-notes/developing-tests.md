# Developing Tests

## Packages

To test the react component with Jest, we need the following react components:

`npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom`

jest: The core testing framework that will run your tests
@testing-library/react: Provides utilities for testing React components
@testing-library/jest-dom: Extends Jest with custom DOM element matchers
@testing-library/user-event: Simulates user events like clicking and typing
jest-environment-jsdom: Creates a browser-like environment for your tests
