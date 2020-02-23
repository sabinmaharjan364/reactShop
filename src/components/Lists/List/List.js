import React from 'react';
import classes from './List.css';
const list=(props)=>{
return(
    
        
      
            
                
                    
                            <tr >
                                <td>
                                    {props.id}
                                </td>
                                <td>
                                    {props.title}
                                </td>
                                <td>
                                    {props.price}
                                </td>
                                <td>
                                    {props.quantity}
                                </td>
                                <td>
                                <button onClick={()=>props.buy(props.price)}>Buy</button>
                                <button onClick={()=>props.show(props.title,props.price)}>Show</button>
                                <button onClick={()=>props.edit(props.product)}>Edit</button>
                                <button onClick={()=>props.delete(props.id)}>Delete</button>
                                </td>
                            </tr>
                       
                
                    
                   
          
       
       

                
  
);
};
export default list;
