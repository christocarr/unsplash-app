import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, User, SearchResults } from 'pages';
import { Search } from 'components';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:username" component={User} />
          <Route path="/search" component={SearchResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
