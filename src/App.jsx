import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nouvellelanding from "./Nouvellelanding/Nouvellelanding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nouvellelanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
