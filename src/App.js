import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Favourites from "./Components/Favourites";
import MostWatched from "./Components/MostWatched";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/mostwatched" element={<MostWatched />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
