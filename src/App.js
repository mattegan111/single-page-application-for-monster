import './App.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import DashboardPage from './DashboardPage';
import UsersPage from './UsersPage';
import CreateUserPage from './CreateUserPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Topbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
