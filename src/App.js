import React, {Component} from 'react'
import './App.css';
import ProductDataContent from './components/productDataContent'
import ProductPreview from './components/productPreview';
import Header from './components/Header'
import ProductData from './productData';
class App extends Component {

  state = {
    productData: ProductData,
    showHeartBeatSection: false,
    currentPreviewImagePos: 0,
    currentFeatureItemPos:0
  }

  onColorOptionClick = (pos)=> {
    this.setState({currentPreviewImagePos:pos})
  }
  onChangeHeartBeatClick = (pos) => {
    console.log(pos)
    this.setState({ showHeartBeatSection: pos })
    this.setState({currentFeatureItemPos:pos})
  }
  render() {
    return (
    <div className="App">
      <Header/>
      <div className="mainContainer">
          <ProductPreview
            currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
            showHeartBeatSection={this.state.showHeartBeatSection}
            currentFeatureItemPos={this.state.currentFeatureItemPos}
            

          />
          <ProductDataContent
            data={this.state.productData}
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onChangeHeartBeatClick={this.onChangeHeartBeatClick}

          />
      </div>
    </div>
    )
  }
}

export default App;
