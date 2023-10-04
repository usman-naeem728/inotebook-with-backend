import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import AddNote from './components/AddNote';
import YourNotes from './components/YourNotes';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/addnote' element={<AddNote />} />
          <Route path='/yournotes' element={<YourNotes />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
