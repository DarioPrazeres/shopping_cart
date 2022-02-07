import React from 'react';
import RouteSwicth from "../src/pages/RouterSwicth";
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <React.StrictMode>
          <RouteSwicth/>
        </React.StrictMode>
        <Footer/>
    </div>
  );
}

export default App;
