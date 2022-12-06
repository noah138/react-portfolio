import "./App.css";
import React, { useState } from "react";
import Page from "./components/Page/Page";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [page, setPage] = useState("About");

  return (
    <div className="App">
      <Header setPage={setPage} currentPage={page}/>
      <Page currentPage={page} />
      <Footer />
    </div>
  );
}

export default App;
