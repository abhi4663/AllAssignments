/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable quotes */
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Greetings from '../greetings';
test('test', () => {
  expect(true).toBe(true);
});

//after each test clean up the tests
afterAll(() => {
  cleanup();
});

//no yet testing weather component is testing or not

test('Should render greetings Component', () => {
  let User = {
    firstName: 'Abhishek',
    lastName: 'Patil',
  };
  render(<Greetings User={User} role='admin' />);
  const GreetingElement = screen.getByTestId('greetings-1');
  expect(GreetingElement).toBeInTheDocument();
  expect(GreetingElement).toHaveTextContent('Welcome Abhishek Patil');
});

test('matches snapshots', () => {
  let User = {
    firstName: 'Abhishek',
    lastName: 'Patil',
  };
  //creting a tree and then converting to JSON
  const tree = renderer.create(<Greetings User={User} role='admin' />).toJSON();
  //this is the component tree
  expect(tree).toMatchSnapshot(); //this creates a snapshot
  console.log(tree);
  //since snapshot alreday created so if any change in the component the snapshot will be updated
});
