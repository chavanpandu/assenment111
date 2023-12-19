/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
// App.js
import React from 'react';
import ReusableTable from './ReusableTable';

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    canFilter: true,
  },
  {
    Header: 'Age',
    accessor: 'age',
    canFilter: true,
  },
  {
    Header: 'Country',
    accessor: 'country',
    canFilter: true,
  },
];

const data = [
  { name: 'John Doe', age: 25, country: 'USA' },
  { name: 'Jane Doe', age: 30, country: 'Canada' },
  { name: 'Bob Smith', age: 22, country: 'UK' },
  // ... more data
];

function App() {
  return (
    <div className="App">
      <ReusableTable columns={columns} data={data} />
    </div>
  );
}

export default App;
