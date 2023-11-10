import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  // Test case for rendering the component
  test('renders the App component', () => {
    // Render the component
    render(<App />);

    // Use testing-library queries to assert that the component is rendered
    // Here, we are checking if an element with the text 'Welcome to My App' is present
    expect(screen.getByText('Connect with Me')).toBeInTheDocument();
  });
});
