import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component
 {
  constructor()
  {
      super();
      this.state =
      {
         products: [],
         loading:true
      }
      this.db= firebase.firestore();
  }
  componentDidMount()
  {
     /*  firebase
     .firestore()
     .collection('products')
     .get()
     .then((snapshot)=>{
     const products =snapshot.docs.map((docs)=>{
        const data=docs.data();
        data['id']=docs.id;
        return data;
     });
     this.setState(
     {
        products,
        loading: false
     })
     })*/
      this.db
     .collection('products')
     .onSnapshot((snapshot)=>{
     const products =snapshot.docs.map((docs)=>{
        const data=docs.data();
        data['id']=docs.id;
        return data;
     });
     this.setState(
     {
        products,
        loading: false
     })
     })

  }
  handleIncreaseQuantity=(product) =>
  {
     const {products}=this.state;
     const index= products.indexOf(product);
     //products[index].qty+=1;

    // this.setState({
     //   products:products
     //})
     const docRef=this.db.collection('products').doc(products[index].id);
     docRef.update({qty: products[index].qty+1})
     .then(()=>{})
     .catch((error)=>{console.log('err', error)})
  }
 handleDecreaseQuantity=(product) =>
 {
    const {products}=this.state;
    const index= products.indexOf(product);
   if(products[index].qty===0)
    return;
    /*products[index].qty-=1;
    this.setState({
       products:products
    })*/
    const docRef=this.db.collection('products').doc(products[index].id);
     docRef.update({qty: products[index].qty-1})
     .then(()=>{})
     .catch((error)=>{console.log('err', error)})
}
handleDeleteProduct=(id)=>
{
  //const {products}=this.state;
   /*const items =products.filter((item)=>item.id!== id);
   this.setState({
     products:items
  })*/
  const docRef=this.db.collection('products').doc(id);
  docRef.delete()
  .then(()=>{})
  .catch((error)=>{console.log('err', error)})
}
getCartCount=()=>
{
   const {products}=this.state;
   let count=0;
    products.forEach((product)=>{
       count+=product.qty
    })
   return count;
}
getCartTotal=()=>
{
   const {products}=this.state;
   let price=0;
    products.forEach((product)=>{
       price+=(product.price*product.qty)
    })
   return price;
}
addProduct=()=>
{
   this.db
   .collection('products')
   .add({
      img:'https://images.unsplash.com/photo-1551761429-8232f9f5955c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
      title: 'Washing Machine',
      price: 10000,
      qty: 2
   })
   .then((docRef)=>{})
   .catch((error)=>{console.log(error)})

}
   render()
   {
    const { products,loading }=this.state;
      return (
      <div className="App">
        <Navbar
        count={this.getCartCount()}/>
        {/*<button onClick={this.addProduct} style={{padding: 20, fontSize:20}}>Add a Product</button>*/}
        <Cart  
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}/>
        {loading && <h1>Loading Products..</h1>}
        <div  style={{padding:10,fontSize:20}}>
        TOTAL:{this.getCartTotal()}
        </div>
    </div>
    
    );
  }
}

export default App;