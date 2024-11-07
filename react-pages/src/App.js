import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
// import Portfolio from "./pages/Portfolio/Portfolio";
// import Layout from './pages/Layout/Layout'

function App() {
  return (
    <HashRouter>
      <Routes basename="/react">
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<Test />}>
          {/* <Route path="/layout" element={<Layout />}> */}
          {/* <Route path=":cardId" element={<DetailCard />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
