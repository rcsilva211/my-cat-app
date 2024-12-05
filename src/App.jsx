import { useState } from 'react';
import CatList from './ex4/CatList.jsx';
import RTKCatList from './ex5/RTKCatList.jsx';
import './App.css';

function App() {
  const [page, setPage] = useState(0);
  const apiKey = 'live_3rSq6scZ3ZtJNavzwUMFIyBaP3JnPuQxJNFJSKluWJqAYS2LX8LxgRlu7sKooQGa';

  return (
    <div>
      <h1>Exercise 4: Redux Thunk</h1>
      <CatList apiKey={apiKey} />

      <h1>Exercise 5: RTK Query</h1>
      <RTKCatList page={page} setPage={setPage} />
    </div>
  );
}

export default App;
