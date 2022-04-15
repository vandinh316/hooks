import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./commons/Header";
import Demo1 from "./components/Demo1";
import Demo2 from "./components/Demo2";
import Demo3 from "./components/Demo3";
import Demo4 from "./components/Demo4";
import Demo5 from "./components/Demo5";
import Demo6 from "./components/Demo6";
import Demo7 from "./components/Demo7";
import Demo8 from "./components/Demo8";
import Demo9 from "./components/Demo9";
import Demo10 from "./components/Demo10";
import Demo11 from "./components/Demo11";
import Demo12 from "./components/Demo12";
import Demo14 from "./components/Demo14";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Demo1 />} />
          <Route path="/demo2" element={<Demo2 />} />
          <Route path="/demo3" element={<Demo3 />} />
          <Route path="/demo4" element={<Demo4 />} />
          <Route path="/demo5" element={<Demo5 />} />
          <Route path="/demo6" element={<Demo6 />} />
          <Route path="/demo7" element={<Demo7 />} />
          <Route path="/demo8" element={<Demo8 />} />
          <Route path="/demo9" element={<Demo9 />} />
          <Route path="/demo10" element={<Demo10 />} />
          <Route path="/demo11" element={<Demo11 />} />
          <Route path="/demo12" element={<Demo12 />} />
          <Route path="/demo14" element={<Demo14 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
