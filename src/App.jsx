import "./App.css";
import FormPage from "./components/FormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientPage from "./components/ClientPage";
import { useEffect, useState } from "react";
import axios from "axios";
import NotAllowed from "./components/NotAllowed";

function App() {
  const [component, setComponent] = useState(<NotAllowed />);

  useEffect(() => {
    axios
      .get("https://expowerx-template-backend.onrender.com/my-protected-page")
      .then((res) => {
        console.log(res);
        if (res.data.comp == "<NotAllowed />") setComponent(<NotAllowed />);
        else if (res.data.comp == "<FormPage />") setComponent(<FormPage />);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:clientId" element={<ClientPage />} />
          <Route path="/" element={component} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
