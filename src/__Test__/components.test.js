import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Routes } from 'react-router-dom';
import store from '../redux/configureStore';
import Main from '../pages/main';
import Each from '../components/Each';
import Home from '../components/Home';
import Top from '../components/Top';

test('Comapnies component renders correctly', () => {
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Main />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Companies Data Passed', () => {
  const mockStore = [
    {
      changes: 1.97,
      changesPercentage: '39.32135',
      companyName: 'Grove, Inc.',
      price: '11.91',
      ticker: 'GRVI',
    },
    {
      changes: 2.47,
      changesPercentage: '"26.165258"',
      companyName: 'NRx Pharmaceuticals, Inc.',
      price: '6.98',
      ticker: 'NRXP',
    },
  ];
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Home nasdaq={mockStore} />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Banner of home page displaying', () => {
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Top />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('each company data shows', () => {
  const i = 1;
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Each name="AAPL" price="450" index={i} company="APPLE INC" />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
