import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ImgurBrowser from './containers/ImgurBrowser/ImgurBrowser';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <ImgurBrowser></ImgurBrowser>

          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
