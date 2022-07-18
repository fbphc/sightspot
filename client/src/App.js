import { Provider } from "./context/Context";
import "./App.css";
import Nav from "./components/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Board from "./components/Board";
import Footer from "./components/layout/Footer";
import Result from "./components/Result";
import SearchResults from "./components/SearchResults";
import TopMovies from "./components/home/TopMovies"
import TopSeries from "./components/home/TopSeries"

import ImgCarousel from './components/layout/Carousel'
import Inputs from "./components/layout/Inputs";

function App() {
  return (
    <Provider>
      <div className="App">
        <Nav />
        <ImgCarousel />
        <Inputs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top_Movies" element={<TopMovies />} />
          <Route path="/top_Series" element={<TopSeries />} />

          <Route path="/search_Results/:name" element={<Result />} />

          <Route path="/search_Results/search/:title" element={<SearchResults />} />


          <Route path="/board" element={<Board /> } />
        </Routes>
        <Footer />
      </div>
      
    </Provider>
  );
}

export default App;
