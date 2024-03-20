
import React from "react";
import './../styles/App.css';
import ItemList from "./ItemList";
import Item from "./ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ItemList />} />
        <Route path="/items/:itemId" element={<Item />} />
        <Route path="/items/:itemId" element={<Item />} />
        <Route path="/items/:itemId" element={<Item />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
