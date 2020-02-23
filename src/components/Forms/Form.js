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
                 
                
               
                                
                    <input type="text" name="id" placeholder="Smartphones" defaultValue={props.id} onChange={(event)=>props.changed}/>
                    <input type="text" name="title" placeholder="Smartphones" defaultValue={props.title} onChange={(event)=>props.changed}/>
         
                    <input type="number" name="price" placeholder="Price" defaultValue={props.price} onChange={(event)=>props.changed}/>
                    <button >Update Product</button>
                    <button onClick={() => props.setEditing(false)}>Cancel</button>
                          
           
                
     
         
 
             </form>
                    </div>
                ):(
      
            <form  className={classes.Form} onSubmit={props.addProduct}>
                <input type="hidden" name="id" placeholder="id" value={props.id} />
                 
                <input type="text" name="title" placeholder="Smartphones"  />
        
                <input type="number" name="price" placeholder="Price" />
                <button >Add Product</button>
    
        

            </form>
         
         )
        }
        
  

          
        
    </div>
    );
};

export default form;