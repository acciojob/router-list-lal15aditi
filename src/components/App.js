
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div id="main">
        {/* Do not remove the main div */}
        
        <BrowserRouter>
          <h1>Item List</h1>
          <ul>
            <li><Link to='/items/1'>Item 1</Link></li>
            <li><Link to='/items/2'>Item 2</Link></li>
            <li><Link to='/items/3'>Item 3</Link></li>
          </ul>
          <Routes>
            <Route path="/items/1" element={
              <>
                <h1>Item 1</h1>
                <p>Description for Item 1</p>
              </>
            } />
            <Route path="/items/2" element={
              <>
                <h1>Item 2</h1>
                <p>Description for Item 2</p>
              </>
            } />
            <Route path="/items/3" element={
              <>
                <h1>Item 3</h1>
                <p>Description for Item 3</p>
              </>
            } />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
