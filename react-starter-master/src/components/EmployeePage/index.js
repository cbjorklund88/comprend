import React from "react"
import EmployeeComponent from "../EmployeeComponent"
import "./style.css"

class EmployeePage extends React.Component {

  state = {
    employees: [],
    employeesFiltered: []
  }

  componentDidMount() {

    const url = "http://hellotechnigo.comprendwebsites.net/api/users"

    fetch(url)
      .then(response => {
        return response.json()
      }).then(result => {
        this.setState({
          employees: result
        })
      })

  }

  render() {
    return (
      <div className="wrapper">
        <div className="employee-page-container">
          <div className="employee-page-intro">
            <h1>Meet some of the people of Comprend</h1>
            <p>We&apos;re very proud of our people at Comprend —
      feel free to contact anyone for a lunch, or just want to ask a
       question about #comprendlife.
            </p>
          </div>
          <div className="employee-wrapper">
            {this.state.employees.map(employee => (
              <div className="employee-container">
                <EmployeeComponent
                  key={employee.id}
                  title={employee.title}
                  name={employee.name}
                  image={employee.pictureUrl} />
              </div>
            ))}
          </div>
          <div className="employee-button-container">
          <button className="load-more-button">Load more lovely Comprenders</button>
          </div>
        </div>
      </div>
    )

  }
}



export default EmployeePage
