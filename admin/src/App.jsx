import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Orders from "./Pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
function App() {
  const url = "https://food-del-backend-ydsa.onrender.com";
  return (
    <>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <ToastContainer />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
