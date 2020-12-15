import React from 'react';


var ProductView = function(props) {
  return(
    <div className="zoomContainer">
      <img className="mainviewer" src={props.item.imgurl}></img>
    </div>
  )
}

export default ProductView;