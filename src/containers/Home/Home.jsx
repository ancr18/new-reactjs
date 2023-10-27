import React, { Component } from "react"
import YoutubeComponent from "../../components/YoutubeComponents/YoutubeComponent"
import Product from "../Product/Product"
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp"

class Home extends Component {
  render() {
    return (
      <>
        {/* <div>
          <p>Youtube Component</p>
          <hr />
          <YoutubeComponent
            time="12.1"
            title="Judul 1"
            desc="1x dinonton, 3 hari yang lalu"
          />

          <YoutubeComponent
            time="11.1"
            title="Judul 2"
            desc="2x dinonton, 4 hari yang lalu"
          />

          <YoutubeComponent
            time="13.1"
            title="Judul 3"
            desc="3x dinonton, 5 hari yang lalu"
          />

          <YoutubeComponent
            time="15.1"
            title="Judul 4"
            desc="4x dinonton, 6 hari yang lalu"
          />

          <YoutubeComponent />
        </div>
        <div>
          <p>Product Component</p>
          <hr />
          <Product />
        </div> */}
        <p>Life Cycle Component </p>
        <br />
        <LifeCycleComp />
      </>
    )
  }
}

export default Home
