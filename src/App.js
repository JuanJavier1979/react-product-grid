import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ProductList from './components/productList';

import products from './data/products'

import 'bulma/sass/utilities/initial-variables.sass';
import 'bulma/bulma.sass';
import './App.css';

import searchIcon from "./images/search-solid.svg";
import addIcon from "./images/plus-solid.svg";
import removeIcon from "./images/minus-solid.svg";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      products: [],
      filteredProducts: [],
      width: 0,
      device: 'desktop',
      desktopClass: 'is-one-fifth-desktop',
      mobileClass: 'is-full-mobile',
    }
    this.updateWinDimension = this.updateWinDimension.bind(this);
  }

  // Add default products before render
  componentWillMount() {
    this.setState({
      products,
      filteredProducts: products
    })
  }

  // Check window dimensions
  componentDidMount() {
    this.updateWinDimension();
    window.addEventListener('resize', this.updateWinDimension);
  }

  // Check window dimensions
  componentWillUnmount() {
    this.updateWinDimension();
    window.removeEventListener('resize', this.updateWinDimension);
  }

  // Update window dimensions to state
  updateWinDimension() {
    this.setState({ width: window.innerWidth });
    if( window.innerWidth > 1023 ) {
      this.setState({ device: 'is-desktop' });
    } else if ( window.innerWidth > 767 ) {
      this.setState({ device: 'is-tablet' });
    } else {
      this.setState({ device: 'is-mobile' });
    }
  }

  // Control Search Filtering Input Field
  onChangeHandler(e){
    let filteredProducts = this.state.products;

    filteredProducts = filteredProducts.filter((product) => {
      let productName = product.name.toLowerCase()
      return productName.indexOf( e.target.value.toLowerCase() ) !== -1
    })

    this.setState({
      filteredProducts
    })
  }

  // Control layout change button
  setLayoutMaxHandler(e){
    this.setState({
      desktopClass: 'is-one-fifth-tablet is-one-fifth-desktop',
      mobileClass: 'is-full-mobile'
    })
  }

  setLayoutMinHandler(e){
    //console.log(this.state.device);
    this.setState({
      desktopClass: 'is-one-fifth-tablet is-one-third-desktop',
      mobileClass: 'is-half-mobile'
    })
  }

  render() {
    //console.log(this.state.device);
    return (
      <div className="App">
        <Header />
        <main className="container">
          <section className="filters columns is-vcentered">
            <div className="column is-half search is-centered-tablet">
              <form>
                <div className="field">
                  <label for="input" className="label visuallyhidden">Buscar</label>
                  <div className="control has-icons-left">
                    <span className="icon is-small is-left">
                      <img src={searchIcon} alt="" />
                    </span>
                    <input className="input" id="input" name="input" type="text" placeholder="Buscar" onChange={this.onChangeHandler.bind(this)} />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-half actions has-text-right hidden-tablet-only">
              <button className="add" onClick={this.setLayoutMaxHandler.bind(this)} aria-label="Incrementa el número de columnas">><img src={addIcon} alt="" /></button>
              <button className="remove" onClick={this.setLayoutMinHandler.bind(this)} aria-label="Disminuye el número de columnas">><img src={removeIcon} alt="" /></button>
            </div>
          </section>
          <ProductList list={this.state.filteredProducts} device={this.state.device} columnsMobile={this.state.mobileClass} columnsDesktop={this.state.desktopClass} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
