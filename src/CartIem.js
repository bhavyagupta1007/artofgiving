import React from 'react'

const CartItem=(props)=> 
{
   /*
    increaseQuantity =( )=>
    {
        // setState option1
       //this.setState({
         //  qty: this.state.qty+1
      // }); 
       this.setState((prevState)=>{
           return{
               qty: prevState.qty+1
           }
       })
    }
    decreaseQuantity =( )=>
    {
       const {qty}= this.state;
       if(qty===0)
       {
           return;
       }
       this.setState((prevState)=>{
           return{
               qty: prevState.qty-1
           }
       })
    } */
    //for a class component to be a react component we give it a method render 
        const {price,title,qty}=props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity,onDeleteProduct}=props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="img-container" style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div>
                        <div style={{fontSize:25}}>{title}</div>
                        <div style={{color:'#777'}}>{price}</div>
                        <div style={{color:'#777'}}>{qty}</div>
                    </div>
                    <div className="card-item-actions">
                         <img
                         alt="increase" 
                         className="action-icons" 
                         src="https://t4.ftcdn.net/jpg/03/15/18/67/240_F_315186799_l9F0RqQepupICBKW2O1pZbRNT7I7a4JC.jpg"
                         onClick={()=>onIncreaseQuantity(product)}/>
                        
                         <img
                         alt="decrease" 
                         className="action-icons" 
                         src="https://t4.ftcdn.net/jpg/03/36/07/27/240_F_336072761_OOcJWJfXR2wyWbOosIkIVjhAMzDK6RPL.jpg"
                         onClick={()=>onDecreaseQuantity(product)}/>
                        
                         <img
                         alt="delete" 
                         className="action-icons" 
                         src="https://t3.ftcdn.net/jpg/03/40/32/90/240_F_340329038_j7H8dA1F0vdbw4ltVYNdZe7b8zv1KWLu.jpg"
                         onClick={()=>onDeleteProduct(product.id)}/>
                    </div>
                </div>

            </div>
        );
}
const styles={
    image: {
        height:110,
        width:110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;