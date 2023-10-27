import React, { Component } from "react"
import "./CardProduct.css"

class CardProduct extends Component {
  state = {
    order: 1,
  }

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue)
  }

  handleBtnPlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order)
      }
    )
  }
  handleBtnMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order)
        }
      )
    }
  }
  render() {
    return (
      <>
        <div className="card">
          <div className="img-thumb-prod">
            <img
              src="https://etanee.id/static/media/salad_sayur.df18ccc9.jpg"
              alt=""
            />
          </div>
          <p className="product-title">Daging Ayam</p>
          <p className="product-price">Rp 410,000</p>
          <div className="counter">
            <button className="minus" onClick={this.handleBtnMinus}>
              -
            </button>
            <input type="text" name="" value={this.state.order} />
            <button className="plus" onClick={this.handleBtnPlus}>
              +
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default CardProduct
