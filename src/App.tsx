
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Customsection from './components/custom-section/Customsection';

function App() {

  return (
    <>
    <Router >
        <Routes>
          <Route path='/' element={<Customsection />} />
          </Routes>
          </Router>
    </>
  )
}

export default App
