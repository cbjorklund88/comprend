import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import SingleJobPage from "./SingleJobPage"
import JobListing from "./JobListing"
import LandingPage from "./LandingPage"
import EmployeePage from "./EmployeePage"
import Footer from "./Footer"
import Header from "./HeaderComponent"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <LandingPage />
          {/* <EmployeePage /> */}
          {/* <JobListing /> */}
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App
