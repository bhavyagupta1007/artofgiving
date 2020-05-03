import React from 'react'

class CartItem extends React.Component
{
    //for a class component to be a react component we give it a method render 
    render()
    {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}>
                    </img>
                </div>
                <div className="right-block">
                    <div>
                        <div style={{fontSize:25}}>Phone</div>
                        <div style={{color:'#777'}}>Rs 999</div>
                        <div style={{color:'#777'}}>Qty:1 </div>
                    </div>
                    <div className="card-item-actions">

                    </div>
                </div>

            </div>
        );
    }
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