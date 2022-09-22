import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import UsersPage from "./Pages/UsersPage";
import UserDetails from "./Pages/UserDetails";
import Navigation from "./Components/Navigation";
import "./App.css";

// const axios = require("axios");
import Axios from "axios";
import TodoApp from "./Pages/TodoApp";

function App() {
  const [users, setUsers] = useState([]);

  //we've called our data from an API
  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // our data is ready
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlist" element={<UsersPage users={users} />} />
          <Route path="/todos" element={<TodoApp />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
