import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CardViewer from "./Components/CardViewer/CardViewer";
import Card from "./Components/Card/Card";
import axios from "axios";
import './App.css'

function App() {
  
  const [collections, setCollections] = useState([]);
  const [card, setCard] = useState();
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);

  async function getAllCollections(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(response.data);
  }

  useEffect(() => {
    getAllCollections();
  }, []);

  async function getCards(cpk){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/' + cpk + '/cards/');
    setCard(response.data);
  }

  async function createNewCard(cpk, newCard) {
    let response = await axios.post('http://127.0.0.1:8000/api/collections/' + cpk + '/cards/', newCard)
    if (response.status === 201) {
      await getCards();
    }
  }

  async function deleteCard(cpk, cardId) {
    let response = await axios.delete('http://127.0.0.1:8000/api/collections/' + cpk + '/cards/' + cardId + '/');
    if (response.status === 204) {
      await getCards();
    }
  }

  async function editCard(cpk, CardId, updatedCard) {
    let response = await axios.put('http://127.0.0.1:8000/api/collections/' + cpk + '/cards/' + CardId + '/', updatedCard);
    if (response.status === 200) {
      await getCards();
    }
  }

  return (
    <div className="App">
      <Header/>
      <Sidebar collections = {collections} selectedCollectionId={selectedCollectionId} setSelectedCollectionId={setSelectedCollectionId}/>
      <CardViewer card = {card} getCards = {getCards} createNewCard = {createNewCard} editCard={editCard} />
      <Card question = 'question' definition='definition' deleteCard = {deleteCard} />
    </div>
  );
}

export default App;
