import React, { Component } from "react"
import CardProduct from "../CardProduct/CardProduct"

import "./Product.css"

class Product extends Component {
  state = {
    order: 1,
  }

  hendlerCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    })
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="logo">
            <img
              src="https://lh3.googleusercontent.com/a/AAcHTtcBnfJOE12U0eB1_NRUg6kJXqewve3JOTFHBMQKdyvRtg=s96-c"
              alt=""
            />
          </div>
          <div className="troley">
            <img
              src="https://etanee.id/static/media/basket-blue.937a12ce.svg"
              alt=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.hendlerCounterChange(value)}
        />
      </>
    )
  }
}

export default Product
