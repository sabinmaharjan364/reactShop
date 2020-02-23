import React from 'react';
import classes from './Form.css';
const form=(props)=>{
    let counter=0
    return (
   
   <div>


            {
                props.isEditing?
                (
                    <div>
                <form   onSubmit={props.updateProduct}>
                 
                
               
                                
                    <input type="text" name="title" placeholder="Smartphones" value={props.title} onChange={(event)=>props.handleInputChange}/>
         
                    <input type="number" name="price" placeholder="Price" value={props.price} onChange={(event)=>props.handleInputChange}/>
                    <button >Update Product</button>
                          
           
                
     
         
 
             </form>
                    </div>
                ):(
      
            <form  className={classes.Form} onSubmit={props.addProduct}>
                <input type="hidden" name="id" placeholder="id" value={++counter} />
                 
                <input type="text" name="title" placeholder="Smartphones" value={props.title} onChange={props.handleInputChange} />
        
                <input type="number" name="price" placeholder="Price" value={props.price} onChange={props.handleInputChange}/>
                <button >Add Product</button>
    
        

            </form>
         
         )
        }
        
  

          
        
    </div>
    );
};

export default form;