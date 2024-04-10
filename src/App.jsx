import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catalog from "./pages/Catalog";
import Navigation from "./components/Navigation/Navigation";
import Watch from "./pages/Watch";
import WatchInfo from "./components/Watch/WatchInfo";
import Authpage from "./pages/AuthPage";

import Player from "./components/Player";
import SignInPage from "./pages/SignInPage";
import { useUser } from "@clerk/clerk-react";

function App() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <Routes>
      <Route element={<Navigation />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/auth" element={<Authpage />} />
        <Route path="/watch" element={<Watch />}>
          <Route path="/watch/:id" element={<WatchInfo />} />
          <Route path="/watch/play/:id" element={<Player />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
