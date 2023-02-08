import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import InfoRestaurant from "./components/InfoRestaurant";
import Hero from "./components/Hero";
import Footer from './components/Footer';

import { DarkModeProvider } from './context/darkModeContext';

function App() {

  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <div className="site-header section">
            <InfoRestaurant />
            <Hero />
            <Navbar />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div className="item-list-container section">
                  <ItemListContainer />
                </div>
              }
            />
            <Route
              path='item/:id'
              element={
                <div className="item-detail-container section">
                  <ItemDetailContainer />
                </div>
              }
            />
            <Route
              path='category/:idCat'
              element={
                <div className="item-list-container section">
                  <ItemListContainer />
                </div>
              }
            />
          </Routes>
            <div className="footer">
              <Footer/>
            </div>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  )
}

export default App;