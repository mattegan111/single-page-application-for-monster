import './App.css';
import Sidebar from './Sidebar';
import DashboardPage from './DashboardPage';
import UsersPage from './UsersPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
//           <Route path="/about" element={<About />} />
// {/*             
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
