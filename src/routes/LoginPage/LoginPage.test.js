import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import LoginPage from './LoginPage';
import { BrowserRouter } from 'react-router-dom'


describe('LoginPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <LoginPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(<BrowserRouter>
        <LoginPage />
      </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});