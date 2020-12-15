import React from 'react';
import ProductView from './productview.jsx';
import PriceView from './priceview.jsx';
import Location from './location.jsx';
import FakeCarousel from './fakecarousel.jsx';
import RatingsBar from './ratingsbar.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false,
      mainprod: '',
      mainImage: '',
    }
    this.getProduct = this.getProduct.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.getProduct();
    console.log(this.state.mainprod.system);
  }
  getProduct() {
    axios.get('/api/items3')
      .then((results) => {
        console.log(results)
        let result = {
          sku: results.data.sku,
          item: results.data.sku,
          price: results.data.sku,
          system: results.data.system
        }
        let arr;
        if (results.data.imgUrl) {
          arr = results.data.imgUrl[0].split(',');
        } else {
          arr = results.data.imgurl.split(',');
        }
        result.imgurl = arr;
        this.setState({
          mainprod: result
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }
  handleClick(e) {
    this.setState({
      clicked: true,
      mainImage: e.target.src
    })
  }

  render() {
    console.log(this.state)
    if (this.state.mainprod === '') {
      return (
        <div>Welcome!</div>
      )
    }
    if (this.state.clicked === true) {
      return(
        <div className="main-view">
          <div>
            <a className="text" id="shopall" href="https://target.com/games">Shop All Games</a></div>
          <span id="productview">
          <div className="title">{this.state.mainprod.item}</div>
          <div className="mainImageContainer">
            <img className="mainImage" src={this.state.mainImage}/>
          </div>
          </span>
          <span id="fakecarousel">
            <FakeCarousel images={this.state.mainprod.imgurl} handleClick={this.handleClick} />
          </span>
          <span className="price">
            <PriceView product={this.state.mainprod}/>
          </span>
          <span className="ratings-bar"><RatingsBar /></span> <a href="" className="questions">5</a>
          <svg height="24" width="24" className="tag">
          <path fill="rgb(204, 0, 0)" d="M12.37 2L23 12.675 12.675 23 2 12.37V2h10.37zM8 5.5c-.677-.676-1.785-.665-2.476.025-.689.69-.7 1.798-.023 2.475.676.677 1.784.666 2.474-.024.69-.69.701-1.799.025-2.476z" /> </svg>
          <a href="" className="text" id="buy2"><b>Buy 2 get 1 free on select video games</b></a>
          <p className="in-store">In-store or Online</p> <a href="" className="price-detail">Details</a>
          <div className="location">
            <Location system={this.state.mainprod.system}/>
          </div>
        </div>
      )
    } else {
      return(
        <div className="main-view">
          <div>
            <a className="text" id="shopall" href="https://target.com/games">Shop All Games</a></div>
          <span id="productview">
          <div className="title">{this.state.mainprod.item}</div>
            <ProductView item={this.state.mainprod}/>
          </span>
          <span id="fakecarousel">
            <FakeCarousel images={this.state.mainprod.imgurl} handleClick={this.handleClick} />
          </span>
          <span className="price">
            <PriceView product={this.state.mainprod}/>
          </span>
          <span className="ratings-bar"><RatingsBar /></span> <a href="" className="questions">5</a>
          <svg height="24" width="24" className="tag">
          <path fill="rgb(204, 0, 0)" d="M12.37 2L23 12.675 12.675 23 2 12.37V2h10.37zM8 5.5c-.677-.676-1.785-.665-2.476.025-.689.69-.7 1.798-.023 2.475.676.677 1.784.666 2.474-.024.69-.69.701-1.799.025-2.476z" /> </svg>
          <a href="" className="text" id="buy2"><b>Buy 2 get 1 free on select video games</b></a>
          <p className="in-store">In-store or Online</p> <a href="" className="price-detail">Details</a>
          <div className="location">
            <Location system={this.state.mainprod.system}/>
          </div>
        </div>
      )
    }

  }

}

export default App;