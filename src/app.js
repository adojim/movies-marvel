import React, {Fragment} from 'react';
import List from './components/list';

export default function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        
        <a className="navbar-brand" href="/">
            MoviesApp
          </a>
        
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
  );
}