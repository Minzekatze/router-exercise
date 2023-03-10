import Instructions from "./Instructions";
import "./styles.scss";
import { getStudents } from "./services/students";
import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Results from "./services/Results";

const App = () => {
  const [myStudents, setMyStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => {
      setMyStudents(response);
    });
  }, []);

  return (
    <div className="App">
      <nav>
        {myStudents.map((theStudent) => (
          <NavLink
            key={theStudent.login.username}
            className="link"
            to={`/students/${theStudent.login.uuid}`}
            style={({ isActive }) => {
              return isActive ? { color: "white", fontWeight: "bold" } : {};
            }}
          >
            {theStudent.name.first} {theStudent.name.last}
          </NavLink>
        ))}
      </nav>

      <div className="Instructions">
        <div className="block">
          <h3>Lovely students</h3>
          <Routes>
            <Route path="/students/:id" element={<Results />} />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
