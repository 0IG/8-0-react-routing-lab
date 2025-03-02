import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees,
      owners,
      pets,
    };
  }

  render() {
    const { employees, owners, pets } = this.state;
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <Home employees={employees} owners={owners} pets={pets} />
              }
            />
            <Route
              path="/staff"
              element={<StaffList employees={employees} />}
            />
            <Route path="/pets/*" element={<PetsList pets={pets} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
