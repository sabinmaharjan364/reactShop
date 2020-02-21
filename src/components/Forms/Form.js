import React from 'react';
import classes from './Form.css';
const form=(props)=>(
   <div>
      
            <form  className={classes.Form} onSubmit={props.addProduct}>
                 
                <input type="text" name="title" placeholder="Smartphones" value={props.title} />
        
                <input type="number" name="price" placeholder="Price" value={props.price}/>
                <button >Add Product</button>
    
        

            </form>
         
    

          
        
    </div>
);

export default form;