import React from 'react';
import classes from './Form.css';
const form=(props)=>{
   
    return (
   
   <div>


            {
                props.isEditing?
                (
                    <div>
                <form   onSubmit={props.updateProduct}>
                 
                
               
                                
                    <input type="hidden" name="id" placeholder="Smartphones" value={props.id} onChange={(event)=>props.changed}/>
                    <input type="text" name="title" placeholder="Smartphones" value={props.title} onChange={(event)=>props.changed}/>
         
                    <input type="number" name="price" placeholder="Price" value={props.price} onChange={(event)=>props.changed}/>
                    <button >Update Product</button>
                          
           
                
     
         
 
             </form>
                    </div>
                ):(
      
            <form  className={classes.Form} onSubmit={props.addProduct}>
                <input type="hidden" name="id" placeholder="id" value={props.id} />
                 
                <input type="text" name="title" placeholder="Smartphones" value={props.title} onChange={(event)=>props.changed} />
        
                <input type="number" name="price" placeholder="Price" value={props.price} onChange={(event)=>props.changed}/>
                <button >Add Product</button>
    
        

            </form>
         
         )
        }
        
  

          
        
    </div>
    );
};

export default form;