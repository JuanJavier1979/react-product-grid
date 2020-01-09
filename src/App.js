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
    }
  }

  componentWillMount() {
    this.setState({
      products,
      filteredProducts: products
    })
  }

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

  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <section className="columns is-vcentered">
            <div className="column is-half">
              <form>
                <div className="field">
                  <label className="label visuallyhidden">Buscar</label>
                  <div className="control has-icons-left">
                    <span className="icon is-small is-left">
                      <img src={searchIcon} alt="" />
                    </span>
                    <input className="input" type="text" placeholder="Buscar" onChange={this.onChangeHandler.bind(this)} />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-half actions has-text-right">
              <img src={addIcon} alt="" className="add" />
              <img src={removeIcon} alt="" className="remove" />
            </div>
          </section>
          <ProductList list={this.state.filteredProducts} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
