import './App.css';
import Sidebar from './Sidebar';
import DashboardPage from './DashboardPage';
import UsersPage from './UsersPage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <DashboardPage />
      <UsersPage />
    </div>
  );
}

export default App;
