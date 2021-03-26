import React from 'react'


const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+ new Date().getMinutes()
    return (
        <div className="productPreview">
        <img style={{ width: "100%", }} src={props.currentPreviewImage} alt="productpreview" />,
        {
          props.showHeartBeatSection ?
            <div className="HeardBeatSection">
                <i className="fa fa-heartbeat"></i>
                <p>78</p>
            </div>
            :
            <div className="TimeSection">
              <p>{ `${currentHour} : ${currentMinutes}` }</p>
            </div>
        }
          
         
        </div>
    )
}
export default ProductPreview;