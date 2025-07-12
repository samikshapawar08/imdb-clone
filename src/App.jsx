import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import ErrorBoundary from "./ErrorBoundary";

import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <ErrorBoundary>
        <Navbar />

        <Routes>
          <Route path="/" element={<Movies />} />

          <Route path="/Watchlist" element={<Watchlist />} />

          
        </Routes>
      </ErrorBoundary>
      </BrowserRouter>

      
    </>
  );
}

export default App;
