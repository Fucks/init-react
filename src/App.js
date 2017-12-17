import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

//components
import { Button } from 'antd';
import Header from 'components/Header';
import Navbar from 'components/Navbar';

//Routes
import {appRoutes} from './routes';

//css
import './App.css';

import {appStore as store} from 'stores/app-store';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Header />
            <Navbar leftMenus={appRoutes.filter(e => (e.menu))} />
            <div className="container">
              {appRoutes.map((rota,index) => (
                <Route
                  key={index}
                  path={rota.path}
                  exact
                  component={rota.component} />
              ))}
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
