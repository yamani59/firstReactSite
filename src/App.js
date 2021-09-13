import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return <h2>Halaman Home</h2>;
}

function ListView() {
  return (
    <div>
      <h2>Semua Users</h2>
      <ul>
        <Link to="/user/hilman">Hilman</Link>
        <Link to="/user/salman">Salman</Link>
      </ul>
    </div>
  );
}

function detailView(match) {
  console.log(match);
  return <h2>Ini halaman {match.params.name}</h2>;
}

function noMatch() {
  return <h2>No match</h2>;
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">User</Link>
            </li>
          </nav>

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/users" exact component={ListView} />
              <Route path="/user/:name" exact component={detailView} />
              <Route component={noMatch} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
