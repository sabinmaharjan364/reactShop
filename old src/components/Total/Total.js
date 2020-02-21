import React  from 'react';

const total =(props)=>{
    return (
    <div>
    <h3>Total Quantity: {props.qty}</h3>
    <h3>Total cash: {props.totalPrice}</h3>

    </div>);
};
export default total;
