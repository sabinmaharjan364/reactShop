import React from 'react';
import classes from './Form.css';
const form=(props,ref)=>(
    <form  className={classes.Form} onSubmit={props.submit}>
        
        <input type="text" name="title" placeholder="Smartphone" value={props.title} />
       
        <input type="number" name="price" placeholder="Price" value={props.price}/>
        <button >Add Product</button>

    </form>
);

export default form;