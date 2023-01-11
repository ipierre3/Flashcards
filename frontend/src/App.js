import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CardViewer from "./Components/CardViewer/CardViewer";
import axios from "axios";
import './App.css'

function App() {
  
  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);

  async function getAllCollections(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(response.data);
  }

  useEffect(() => {
    getAllCollections();
    getCards(1);
  }, []);

  async function getCards(cpk){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/' + cpk + '/cards/');
    setCards(response.data);
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
    <div>
      <Header/>
      <Sidebar collections = {collections} setSelectedCollectionId={setSelectedCollectionId} getCards={getCards}/>
      <CardViewer cards = {cards} getCards = {getCards} createNewCard = {createNewCard} editCard={editCard} deleteCard = {deleteCard} />
    </div>
  );
}

export default App;