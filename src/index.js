import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout/main';
import SearchGeneralApp from './views/SearchGeneralApp';

ReactDOM.render(
  <Layout>
    <SearchGeneralApp />
  </Layout>,
  document.getElementById('root')
);

