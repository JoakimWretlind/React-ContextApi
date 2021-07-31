import React, { useState } from 'react';
import Home from './components/pages/Home'
import View from './components/pages/View';
import Edit from './components/pages/Edit';
import { GlobalStyle } from './globalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataContext } from './Context/DataContext';

function App() {
  const [value, setValue] = useState('Hello from Context')

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <DataContext.Provider value={{ value, setValue }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/view" component={View} />
            <Route exact path="/edit" component={Edit} />
          </DataContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
