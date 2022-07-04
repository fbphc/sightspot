import { Provider } from "./context/Context";
import "./App.css";
import Nav from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Result from "./components/Result";
import SearchResults from "./components/SearchResults";

import ImgCarousel from './components/Carousel'
import Inputs from "./components/Inputs";

function App() {
  return (
    <Provider>
      <div className="App">
        <Nav />
        <ImgCarousel />
        <Inputs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search_Results" element={<SearchResults />} /> {/* click here */}
          <Route path="/search_Results/:name" element={<Result />} />

          <Route path="/board" element={<Board /> } />
        </Routes>
        <Footer />
      </div>
      
    </Provider>
  );
}

export default App;
