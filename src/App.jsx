import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import ErrorBoundary from "./ErrorBoundary";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                
                  <Banner /> <Movies />
                </>
              }
            />

            <Route path="/Watchlist" element={<Watchlist />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
