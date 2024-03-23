import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catalog from "./pages/Catalog";
import Navigation from "./components/Navigation/Navigation";
import Watch from "./pages/Watch";
import WatchInfo from "./components/Watch/WatchInfo";

import Player from "./components/Player";

function App() {
  return (
    <Routes>
      <Route element={<Navigation />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/watch" element={<Watch />}>
          <Route path="/watch/:id" element={<WatchInfo />} />
          <Route path="/watch/play/:id" element={<Player />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
