import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Forms/Form';
import Lists from './components/Lists/Lists';
import Total from './components/Total/Total';


class App extends Component {
  state = {
    isEditing:false,
    qty: 0,
    products: [
      {
        id: 1,
        title: 'android',
        price: 12,
        quantity: 0
      },
      {
        id: 2,
        title: 'iphone',
        price: 23,
        quantity: 0

      },
      {
        id: 3,
        title: 'nokia',
        price: 11,
        quantity: 0

      }
    ],
    totalPrice: 0,
    
  }
  addProductHandler = (event) => {
    event.preventDefault();
    var product = {
      title: event.target.title.value,
      price: parseInt(event.target.price.value)
    }
    this.setState({ products: this.state.products.concat(product) });;

  }
  buyHandler = (price, id) => {
    const oldProducts = [...this.state.products];

    oldProducts.find(
      (element, index) => {
        if (id == element.id) {
          oldProducts[index].quantity += 1;
          console.log(oldProducts);
          this.setState({ products: oldProducts });
        }
      });
    // I can get the id here but don't have idea to set theier own quqntity
    const qty = this.setState({ qty: this.state.qty + 1 });
    const totalPrice = this.setState({ totalPrice: this.state.totalPrice + price });

  }

  showHandler = (title, price) => {
    alert(title + "   " + price);
  }

  editHandler=(id,title,price)=>{
    const updateData = 
      [{
        id:id,
        title:title,
        price,price

      }]
    ;

    console.log(updateData);
    this.setState({isEditing:true});

   



  }
  updateProductHandler=(id)=>{
    alert('í am here');
  }
  deleteHandler=(item)=>{

    const newList = this.state.products.splice(item, 1);
    // const data = this.state.products.filter(i => i.id != item)
    this.setState({newList});

   
  }
  render() {
    return (
      <div className="App">
        <Form 
        addProduct={this.addProductHandler} 
        
        />
        i am returning list of product here
        <Lists 
        productsData={this.state.products} 
        buy={this.buyHandler} 
        show={this.showHandler} 
        qty={this.state.qty} 
        edit={this.editHandler}
        delete={this.deleteHandler}
        isEditing={this.state.isEditing}
        updateProduct={this.updateProductHandler}
        />
        <Total qty={this.state.qty} totalPrice={this.state.totalPrice} />
      </div>
    );
  }
}

export default App;
