import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nouvellelanding from "./Nouvellelanding/Nouvellelanding";
import Nouvellelanding2 from "./Nouvellelanding/Nouvellelanding2";
import Mintnotworking from "./Mintnotworking/Mintnotworking";
import Mintworking from "./Mintworking/Mintworking";
import Mintbuy from "./Mintworking/Mintbuy/Mintbuy";
import Mintsucces from "./Mintworking/Mintsucces/Mintsucces";
import { RouteNotLogged, RouteLogged } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RouteNotLogged />}>
          <Route path="/*" element={<Nouvellelanding2 />} />
          <Route path="/mint" element={<Mintnotworking />} />
          <Route path="/minting" element={<Mintworking />} />
          <Route path="/mint/buy" element={<Mintbuy />} />
          <Route path="/mintsucces" element={<Mintsucces />} />
        </Route>
        {/* <Route element={<RouteLogged />}>
          <Route path='/*' element={<Dashboard />} />
          <Route path='/watchlist' element={<Watchlist />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
