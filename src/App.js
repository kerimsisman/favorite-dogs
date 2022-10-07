import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllDogsPage from "./pages/AllDogs";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<AllDogsPage />} />
        <Route path="/favorites" exact={true} element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
