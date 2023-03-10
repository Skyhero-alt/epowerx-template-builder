import "./App.css";
import FormPage from "./components/FormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientPage from "./components/ClientPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:clientId" element={<ClientPage />} />
          <Route path="/admin" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
