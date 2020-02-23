import React from 'react';
import List from './List/List';
const lists = (props) => {


    const list = props.productsData.map(product => {
        return <List key={product.id} 
            id={product.id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            buy={() => props.buy(product.price, product.id)}
            show={() => props.show(product.title, product.price)} 
            edit= {() => props.edit(product)} 
            delete= {() => props.delete(product.id)} />
    });
    
   
    return (
       
        
                    <div>

                    
                    
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Cost</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {list}

                        
                        </tbody>
                    </table>
                    </div>
            
    
    );

};
export default lists;