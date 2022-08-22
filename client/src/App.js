import { Provider } from "./context/Context";
import "./App.css";
import Nav from "./components/Navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Board from "./components/forum/Board";
import Footer from "./components/home/Footer";
import Result from "./components/results/Result";
import SearchResults from "./components/results/SearchResults";
import TopRated from "./components/home/TopRated";
import Header from "./components/home/Header";
import { AuthProvider } from "./context/auth/authContext";
import { BoardProvider } from "./context/boardContext/BoardContext";

function App() {
  return (
    <>
      <Provider>
        <AuthProvider>
          <div className="App">
            <Nav />
            <Header />
            {/* <Inputs /> */}
            
            <BoardProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<TopRated />}></Route>
                <Route
                  path="/search_Results/search/:title"
                  element={<SearchResults />}
                />
                <Route path="/search_Results/:name" element={<Result />} />
                <Route path="/board" element={<Board />} />
              </Routes>
            </BoardProvider>
            <Footer />
          </div>
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
