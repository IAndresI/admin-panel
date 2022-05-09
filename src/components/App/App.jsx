import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUser from '../../pages/CreateUser/CreateUser';
import Home from '../Home/Home';
import List from '../List/List';
import Login from '../Login/Login';
import UserPage from '../UserPage/UserPage';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/users">
          <Route path="" index element={<List />} />
          <Route path=":id" index element={<UserPage />} />
          <Route path="new" index element={<CreateUser />} />
        </Route>
        <Route path="/products">
          <Route path="" index element={<List />} />
          <Route path=":id" index element={<UserPage />} />
          <Route path="new" index element={<CreateUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;