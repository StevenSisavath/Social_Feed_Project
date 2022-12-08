import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {
    const [posts, setPosts] = useState([])

    return (
      <div>
          <NavBar/>
      </div>
  );
}

export default App;
