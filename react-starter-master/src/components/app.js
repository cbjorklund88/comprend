import React from "react"
import SingleJob from "./SingleJobPage"
import JobListing from "./JobListing"
import LandingPage from "./LandingPage"
import EmployeePage from "./EmployeePage"

class App extends React.Component {

  render() {
    return (
      <div>
        <EmployeePage />
        {/* <JobListing /> */}

      </div>
    )
  }

}

export default App
