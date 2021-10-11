import React from 'react';
import './style/style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const loading = (
  <div className="pt-3 text-center">
    <div className="">Loading...</div>
  </div>
)

const Layout = React.lazy(() => import('./containers/Layout'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <Layout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
