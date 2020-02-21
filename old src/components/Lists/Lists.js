import React from 'react';
import List from './List/List';
const lists=(props)=>{

    
  const list= props.productsData.map(product=>{
        return <List key={product.id} id={product.id} title={product.title} price={product.price} qty={props.qty} buy={()=>props.buy(product.price,product.id)} show={()=>props.show(product.title,product.price)}/>

    });
    return (
        <div>
            {list}
        </div>
    );
    
};
export default lists;