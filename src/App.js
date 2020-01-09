import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ProductCard from './components/productCard';

import 'bulma/sass/utilities/initial-variables.sass';
import 'bulma/bulma.sass';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import './App.css';

import searchIcon from "./images/search-solid.svg";
import addIcon from "./images/plus-solid.svg";
import removeIcon from "./images/minus-solid.svg";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      products: [
        {
          "key": 1,
          "image": "00345-058",
          "name": "Jersey básico cuello cisne niña rosa",
          "price": "21,99",
          "discounted": "18,00",
          "percentage": "-20",
        },
        {
          "key": 2,
          "image": "00345-060",
          "name": "Jersey básico cuello cisne niña amarillo",
          "price": "21,99",
          "discounted": "18,00",
          "percentage": "-20",
        },
        {
          "key": 3,
          "image": "00345-062",
          "name": "Jersey básico cuello cisne niña fucsia",
          "price": "21,99",
          "discounted": "18,00",
          "percentage": "-20",
        },
        {
          "key": 4,
          "image": "00345-063",
          "name": "Jersey básico cuello cisne niña negro",
          "price": "21,99",
          "discounted": "18,00",
          "percentage": "-20",
        },
        {
          "key": 5,
          "image": "07302-034",
          "name": "Jersey motivos calados niña gris",
          "price": "33,99",
        },
        {
          "key": 6,
          "image": "07302-035",
          "name": "Jersey motivos calados niña negro",
          "price": "33,99",
        },
        {
          "key": 7,
          "image": "07304-088",
          "name": "Jersey cuello semicisne trenzas niña rojo",
          "price": "29,99",
        },
        {
          "key": 8,
          "image": "07304-089",
          "name": "Jersey cuello semicisne trenzas niña negro",
          "price": "29,99",
        }
      ],
      input: '',
    }
  }

  onChangeHandler(e){
    console.log(e.target.value);
    this.setState({
      input: e.target.value,
    })
  }

  render() {
    const { products } = this.state;

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
          <section className="columns is-multiline">
            {products.map(product =>
              <ProductCard key={product.key} imageURL={product.image} productName={product.name} price={product.price} discountedPrice={product.discounted} discountPercentage={product.percentage} />
            )}
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
