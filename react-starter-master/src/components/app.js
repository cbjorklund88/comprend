import React from "react"
import SingleJobPage from "./SingleJobPage"
import JobListing from "./JobListing"
import LandingPage from "./LandingPage"
import EmployeePage from "./EmployeePage"
import Header from "./HeaderComponent"

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <LandingPage />
        {/* <EmployeePage /> */}
        {/* <JobListing /> */}

      </div>
    )
  }

}

export default App
