import React from 'react';
import List from './List/List';
const lists = (props) => {


    const list = props.productsData.map(product => {
        return <List key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            qty={product.quantity}
            buy={() => props.buy(product.price, product.id)}
            show={() => props.show(product.title, product.price)} 
            edit= {() => props.edit(product.id,product.title,product.price)} 
            delete= {() => props.delete(product.id)} />
    });
    
   
    return (
       
        <div>
            {
                props.isEditing?
                (
                    <div>
                <form   onSubmit={props.updateProduct}>
                 
                
                            <div>
                                     <input type="text" name="title" placeholder="Smartphones" value={props.title} />
         
                 <input type="number" name="price" placeholder="Price" value={props.price}/>
                 <button >Update Product</button>
                            </div>
                            
           
                
     
         
 
             </form>
                    </div>
                ):(
                    <div>
                        {list}

                    </div>
                )
            }
            
      
        </div>
    );

};
export default lists;