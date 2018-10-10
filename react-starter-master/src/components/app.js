import React from "react"
import SingleJob from "./SingleJobPage"
import JobListing from "./JobListing"
import LandingPage from "./LandingPage"
import EmployeePage from "./EmployeePage"
import Footer from "./Footer"

class App extends React.Component {

  render() {
    return (
      <div>
        <LandingPage />
        {/* <EmployeePage /> */}
        {/* <JobListing /> */}
        <Footer />
      </div>
    )
  }

}

export default App
