import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withFetch from 'withFetch';
import { Home, User, SearchResults } from 'pages';
import { Navbar } from 'components';
import GlobalStyle from 'globalStyles';

const HomeWithFetch = withFetch(Home);

const UserWithFetch = withFetch(User);

const SearchResultsWithFetch = withFetch(SearchResults);

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeWithFetch} />
        <Route path="/users/:username" component={UserWithFetch} />
        <Route path="/search" component={SearchResultsWithFetch} />
      </Switch>
    </Router>
  );
}

export default App;
