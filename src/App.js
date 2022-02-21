import './App.css';
import Sidebar from './Sidebar';

function App() {
  const loggedUser = 'Monster';

  return (
    <div className="App">
      <Sidebar />
      <h1>Welcome {loggedUser}</h1>
    </div>
  );
}

export default App;
