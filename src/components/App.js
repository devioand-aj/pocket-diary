import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../styles/App.css";
import UserState from "../context/user/userState";
import ContactState from "../context/contact/ContactState";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dropdown from "./common/Dropdown";
import DropdownItem from "./common/DropdownItem";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="App">
      {/* <Dropdown>
        <DropdownItem>Facebook</DropdownItem>
      </Dropdown> */}
      <Router>
        <UserState>
          <ContactState>
            <Route exact path="/" component={Login} />
            <Route
              exact
              path="/dropdown"
              render={() => (
                <Dropdown
                  selectedOption={selectedOption}
                  onClick={(value) => setSelectedOption(value)}
                >
                  <DropdownItem>FaceBook</DropdownItem>
                  <DropdownItem>Youtube</DropdownItem>
                  <DropdownItem>Instagram</DropdownItem>
                </Dropdown>
              )}
            />
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/practice" component={Practice} /> */}
            <Route exact path="/user/:id" component={Home} />
          </ContactState>
        </UserState>
      </Router>
    </div>
  );
}

export default App;
