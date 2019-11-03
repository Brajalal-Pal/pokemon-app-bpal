import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DashBoard from "./dashBoard";
//import renderer from 'react-test-renderer';

describe('DashBoard component', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DashBoard initialUrl="https://w"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
  

