import React, { Component } from "react"
import "./LifeCycleComp.css"

class LifeCycleComp extends Component {
  render() {
    return (
      <>
        <button className="btn" onClick={console.log("gass")}>
          Component Button
        </button>
      </>
    )
  }
}

export default LifeCycleComp
