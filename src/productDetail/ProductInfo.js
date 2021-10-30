import React from "react";
import classes from './ProductInfo.module.css';


const ProductInfo=(props)=>{
  console.log(props.data)
  const colorOption=props.data.colorOptions.map((item,pos)=>{
    const classArr=[classes.imageOption]
    if(pos===0){
      classArr.push(classes.imageOption.hower)
    }
    return(
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.OnColorOptionClick(pos)}></img>
    );
  
  })
  const featureList=props.data.featureList.map((item,pos)=>{
    const classArr=[classes.buttonStyle];
    if(props.showHeartbeatSection){
      classArr.push(classes.buttonStyle.hower)
    }
      return(
        <button onClick={()=>props.OnFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item} </button>
      );
  })
    return(
        
        <div className={classes.productData}>
          <h1 className={classes.productTitle}>{props.data.title}</h1>
          <p className={classes.productDescription}>{props.data.description}</p>
          <h3 className={classes.color}>Select Color</h3>
          {/*<div className="colorOption">
            <img className="imageOption" src="https://imgur.com/iOeUBV7.png" alt="black watch"></img>
            <img className="imageOption" src="https://imgur.com/PTgQlim.png" alt="red watch"></img>
            <img className="imageOption" src="https://imgur.com/Mplj1YR.png" alt="blue watch"></img>
            <img className="imageOption" src="https://imgur.com/xSIK4M8.png" alt="pink watch"></img>
          </div>*/}
          {colorOption}
          <h3 className={classes.color}>Feature</h3>
          {/*<div>
            <button className={classes.buttonStyle}>Time</button>
            <button className={classes.buttonStyle}>Heart Rate</button>
            </div>*/}
            <div>
          {featureList}
          </div>
          <button className={classes.buynowButton}>Buy Now</button>
          </div>
        
    );
}
export default ProductInfo;