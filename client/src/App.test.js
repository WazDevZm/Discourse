import { render, fireEvent, waitfor} from '@testing-library/react';
import App from '/App';

test('renders learn react link', () =>{
  render(<App/>);
  constlinkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
