import React from 'react'

const ProductDataContent = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = ["productWatch"]
    if (pos === props.currentPreviewImagePos) {
      classArr.push("selectedProduct")
    }
    
    return (
      <img
        key={pos}
        className={classArr.join(" ")}
        onClick={()=> props.onColorOptionClick(pos)}
        style={{
        width: "100px",
        cursor: "pointer",
        border: "1px #c2c2c2 solid",
        margin: "10px"
        }}
        src={item.imageUrl}
        alt={item.styleName} />
    )
  })
  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = ["featueItem"]
    if (pos === props.currentFeatureItemPos) {
      classArr.push("selectedFeatureItem")
    }
    return (
      <button onClick={ () => props.onChangeHeartBeatClick(pos)} key={pos} className={classArr.join(" ")}>{item}</button>
    )
  })
    return (
        <div className="productData">
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
          <div className="setColors">
            <h2>Set color</h2>
          <div className="setColorsImg">
            {colorOptions}
              {/* <img className="productWatch selectedProduct" style={{ width: "100px", cursor: "pointer", border: "1px #c2c2c2 solid", margin:"10px"}} src="https://imgur.com/iOeUBV7.png" alt="blackwatch" />
              <img className="productWatch" style={{ width: "100px",cursor:"pointer",border:"1px #c2c2c2 solid", margin:"10px" }} src="https://imgur.com/PTgQlim.png" alt="redwatch" />
              <img className="productWatch" style={{ width: "100px",cursor:"pointer",border:"1px #c2c2c2 solid", margin:"10px" }} src="https://imgur.com/Mplj1YR.png" alt="bluewatch" />
              <img className="productWatch" style={{width:"100px",cursor:"pointer",border:"1px #c2c2c2 solid", margin:"10px"}} src="https://imgur.com/xSIK4M8.png" alt="purplewatch" /> */}
            </div>
          </div>
          <div className="features">
            <h2>Features</h2>
            {featureList}
          </div>
          <button className="primaryButton">Buy now</button>
        </div>
    )
}

export default ProductDataContent