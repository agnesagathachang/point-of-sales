import "./App.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddInvoice from "./pages/AddInvoice";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-invoice" element={<AddInvoice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
