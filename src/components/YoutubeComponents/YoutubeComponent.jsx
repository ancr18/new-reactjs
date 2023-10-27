import React from "react"
import "./YoutubeComponent.css"
import Product from "../../containers/Product/Product"

const YoutubeComponent = (props) => {
  return (
    <>
      <div className="youtube-wrapper">
        <div className="img-thumb">
          <img
            src="https://i.ytimg.com/an_webp/QkRRH21AYQo/mqdefault_6s.webp?du=3000&sqp=CJrW5qkG&rs=AOn4CLDfM6NG3bHPWxrcPYlx3M8T962aag"
            alt=""
          />
          <p className="time">{props.time}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
      </div>
    </>
  )
}

// membuat nilai default dari props
YoutubeComponent.defaultProps = {
  time: "00.00",
  title: "Judul",
  desc: "0x dinonton, 0 hari yang lalu",
}

export default YoutubeComponent
