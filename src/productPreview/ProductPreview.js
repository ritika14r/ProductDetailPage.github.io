import React from 'react';
import './ProductPreview.css';

const ProductPreview=(props)=>{
    const hours=new Date().getHours()>9? new Date().getHours(): '0'+ new Date().getHours();
    const minutes=new Date().getMinutes()>9? new Date().getMinutes(): '0'+ new Date().getMinutes();
    return(
        <>
        <div className="productPreview">

        <img style={{margin:"100px",width:"400px"}}src={props.currentPreviewImage} alt="Watch"></img>
            {
            props.showHeartbeatSection?
           <div className="displayWathchDataTime">
              <p>{`${hours}:${minutes}`}</p>
            </div>
            :
            <div className="displayWathchDataHeart">
            <i class="fas fa-heartbeat"></i>
              <p>78</p>
            </div>
            
             }
             </div>
        </>
    )
}
export default ProductPreview;