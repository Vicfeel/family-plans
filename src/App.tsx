import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Layout} from 'antd';

import {Sidebar, Main} from './layouts';

import './App.css';

const App = () => (
  <Layout className="App">
    <BrowserRouter>
      <Sidebar />
      <Main />
    </BrowserRouter>
  </Layout>
);

export default App;
