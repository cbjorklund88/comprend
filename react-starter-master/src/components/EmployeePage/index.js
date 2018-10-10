import React from "react"
import EmployeeComponent from "../EmployeeComponent"
import "./style.css"

class EmployeePage extends React.Component {

  state = {
    employees: [],
    employeesToLoad: 20
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
   handleClickLoadMore = () => {
     this.setState({
       employeesToLoad: this.state.employeesToLoad += 20
     })
   }
   render() {
    const placeholder = "/assets/images/placeholder.png"
      this.state.employees.forEach(item => {
      if (item.pictureUrl === "") {
          item.pictureUrl = placeholder
      }
        if (item.name === "" || item.name === null || item.name.includes("@")) {
        const itemIndex = this.state.employees.indexOf(item)
        this.state.employees.splice(itemIndex, 1)
      }
    })

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
            {this.state.employees.slice(0, this.state.employeesToLoad).map(employee => (
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
            <button className="load-more-button" onClick={this.handleClickLoadMore}>Load more lovely Comprenders</button>
          </div>
        </div>
       </div>
     )
   }
}



export default EmployeePage
