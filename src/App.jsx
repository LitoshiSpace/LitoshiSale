import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nouvellelanding from "./Nouvellelanding/Nouvellelanding";
import Nouvellelanding2 from "./Nouvellelanding/Nouvellelanding2";
import Mintnotworking from "./Mintnotworking/Mintnotworking";
import Mintworking from "./Mintworking/Mintworking";
import Mintbuy from "./Mintworking/Mintbuy/Mintbuy";
import Mintsucces from "./Mintworking/Mintsucces/Mintsucces";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nouvellelanding />} />
        <Route path="/mint" element={<Mintnotworking />} />
        <Route path="/minting" element={<Mintworking />} />
        <Route path="/mintbuy" element={<Mintbuy />} />
        <Route path="/mintsucces" element={<Mintsucces />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
