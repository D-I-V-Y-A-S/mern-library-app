import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllBooksComponent from './components/GetAllBooksComponent/GetAllBooksComponent';
import AddNewBooksComponent from './components/AddNewBooksComponent/AddNewBooksComponent';
import EditBooksComponent from './components/EditBooksComponent/EditBooksComponent';
import DeleteBooksComponent from './components/DeleteBooksComponent/DeleteBooksComponent';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Library App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Books</Link>
                <Link to="/admin/edit" >Edit Books</Link>
                <Link to="/admin/delete" >Delete Books</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllBooksComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewBooksComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditBooksComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeleteBooksComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
