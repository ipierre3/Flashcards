import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import axios from "axios";

function App() {
  
  const [collections, setCollections] = useState([]);

  async function getAllCollections(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(response.data);
  }

  useEffect(() => {
    getAllCollections();
  }, []);

  return (
    <div>
      <Header/>
      <Sidebar collections = {collections} />
    </div>
  );
}

export default App;
