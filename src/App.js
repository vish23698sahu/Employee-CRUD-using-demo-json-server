import { Route, Routes } from 'react-router-dom';
import AddEmployee from './components/addEmployee/AddEmployee';
import EmployeeList from './components/employeeList/EmployeeList';
import FindEmployee from './components/findEmployee/FindEmployee';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Resource from './pages/resources/Resource';
import './App.css';
import EditEmployee from './components/editEmployee/EditEmployee';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employees' element={<EmployeeList />} />
        <Route path='/create' element={<AddEmployee />} />
        <Route path='/find' element={<FindEmployee />} />
        <Route path='/resources' element={<Resource />} />
        <Route path='/edit/:id' element={<EditEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
