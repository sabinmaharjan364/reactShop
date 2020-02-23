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
        id: null,
        title: '',
        price: 0,
        quantity: 0,
    
      }
    ],
    totalPrice: 0,

    
  }
  handleInputChange=(event)=> {

      console.log(event);
      this.setState({
        products:[
          {name:event.target.value}
        ]
      })
  
  }
  addProductHandler = (event) => {
    

    event.preventDefault();
    var product = {
      id:this.state.products.length+1,
      title: event.target.title.value,
      price: parseInt(event.target.price.value),
      quantity:0
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

  editHandler=(product)=>{
// another method using argument
    // this.setState({
    //   isEditing: true,
    //   id: arguments[0],
    //   title: arguments[1],
    //   price:arguments[2]
    // });
    if(this.state.id!==null){
      this.setState({isEditing:true});
      this.setState({
        id:product.id,
        title:product.title,
        price:product.price
      })
    };
   
   



  }
  updateProductHandler=(event)=>{
    event.preventDefault();

    this.setState({
      products: this.state.products.map(item => {
        if (item.id === this.state.products.id) {
          item['title'] = event.target.title.value;
          item['price'] = event.target.price.value;
          return item;
        }
        console.log(item);
        return item;
      })
    });

    this.setState({
      isEditing: false
    });

  

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
        id={this.state.id}
        title={this.state.title}
        price={this.state.price}
        isEditing={this.state.isEditing}
        changed={(event)=>this.handleInputChange}

        />
        <Lists 
        productsData={this.state.products} 
        buy={this.buyHandler} 
        show={this.showHandler} 
        qty={this.state.qty} 
        edit={this.editHandler}
        delete={this.deleteHandler}
        updateProduct={this.updateProductHandler}
        />
        {
          this.state.title!==""?
            (<div>
                <Total qty={this.state.qty} totalPrice={this.state.totalPrice} />

              </div>
            ):
            (
              <div>

              </div>
            )
        }
      </div>
    );
  }
}

export default App;
