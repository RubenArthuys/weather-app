import React from 'react';
const api = {
  key: "1d74672073b792c77fa94c2025871385",
  base: "https://api.openweathermap.org/data/2.5"
}
function App() {
  return (
    <div className="app">
      <main>
       <div className="search-box">
         <input type="text" className="search-bar" placeholder="Search..." ></input>

       </div>
      </main>
    </div>
  );
}

export default App;
