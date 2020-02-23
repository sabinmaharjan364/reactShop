import React from 'react';
import classes from './List.css';
const list=(props)=>{
return(
    <div className={classes.List}>
        
        {
            props.id!==null?
            (
                <div>
                    <p className={classes.Left}>{props.id}</p> 
                    <p className={classes.Left}>{props.title}</p> 
                    <div className={classes.Right}><label>Price :</label>{props.price}</div>
                    <div className={classes.Right}><label>Quantity:</label>{props.qty}</div>
                    <button onClick={()=>props.buy(props.price)}>Buy</button>
                    <button onClick={()=>props.show(props.title,props.price)}>Show</button>
                    <button onClick={()=>props.edit(props.product)}>Edit</button>
                    <button onClick={()=>props.delete(props.id)}>Delete</button>
                    </div>
            ):(null)
        }
        <hr/>

                
    </div>
);
};
export default list;
