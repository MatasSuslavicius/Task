import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom"
import List from "./views/List"
import Details from "./views/Details"
import NewRecord from "./views/NewRecord"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/details" element={<Details />} />
          <Route path="/newRecord" element={<NewRecord />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
