import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import APIRequest from "./components/APIRequest";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
const [counterLoaded, setCounterLoaded] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Counter" element={<Counter />} />
            <Route path="APIRequest" element={<APIRequest />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
