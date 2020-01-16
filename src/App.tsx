import React from 'react';
import {Layout} from 'antd';

import {Sidebar, Main} from './layouts';

import './App.css';

const App = () => (
  <Layout className="App">
    <Sidebar />
    <Main />
  </Layout>
);

export default App;
