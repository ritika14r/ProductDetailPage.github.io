import React ,{Component} from 'react';
import './App.css';
import ProductInfo from './productDetail/ProductInfo';
import ProductPreview from './productPreview/ProductPreview';
import TopBar from './topBar/TopBar';
import productData from './Utils/productData';

class App extends Component {
  
  state = {
    productData: productData,
    currentPreviewImagePos:0,
    showHeartbeatSection:true,
  }
  OnColorOptionClick=(pos)=>{
    const UpdatedPreviewImage=this.state.productData.colorOptions[pos].imageUrl
    console.log(UpdatedPreviewImage)
    this.setState({currentPreviewImagePos: pos});

  }
  OnFeatureItemClick=(pos)=>{
    let updatedState=true;
    if (pos===1){
      updatedState=false;
    }
    this.setState({showHeartbeatSection : updatedState})
  }


  render(){
  return (
    <>
    <div className="App">
      <TopBar/>
      <div className="mainContainer">
        <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
        showHeartbeatSection={this.state.showHeartbeatSection}/>
        <ProductInfo data={this.state.productData} 
        OnColorOptionClick={this.OnColorOptionClick}
        OnFeatureItemClick={this.OnFeatureItemClick}/>
      </div>
    </div>
      </>
    
  );
}
}
export default App;
