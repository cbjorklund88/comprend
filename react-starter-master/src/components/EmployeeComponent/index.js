import React from "react"
import "./style.css"

class EmployeeComponent extends React.Component {


render() {
  const { name, title, image } = this.props

    return (
      <div className="employee-inner-container">
        <div className="employee-portrait">
          <img src={image} alt="" />
        </div>
        <div className="employee-info">
        <p>{name}</p>
        <p>{title}</p>
        </div>
      </div>

  )

}
}



export default EmployeeComponent
