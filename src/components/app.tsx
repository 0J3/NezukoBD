import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';
import Header from './header';
import bd from '../routes/download/bd';
import pc from '../routes/download/pc';
import DlThanks from '../routes/download/thanks';
import downloads from '../routes/download/downloads';

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/downloads/" component={downloads} />
        <Route path="/download/" component={bd} />
        <Route path="/download/pc" component={pc} />
        <Route path="/download/thanks/" component={DlThanks} />
        <Route path="/download/thanks/:type" component={DlThanks} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
