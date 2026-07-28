// src/App.jsx

import { useState } from "react";
import './App.css'

function App() {
const initialState = 
[
  {
    id: 1,
    name: "Black T shirt",
    price: 5
  },
  {
    id: 2,
    name: "Hanger Set",
    price: 8
  },
  {
    id: 3,
    name: "Thoub",
    price: 12
  },
  {
    id: 4,
    name: "Computer Bag",
    price: 20
  },
  {
    id: 5,
    name: "Couch",
    price: 50
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 70
  }
];


const [products, setProducts] = useState(initialState)
const [shoppingCart, setShoppingCart] = useState([])
const [availableBalance, setAvailableBalance] = useState(100)
const [warningMsg, setWarningMsg] = useState('')


const handleAddToCart = (clicked) => {

  const remainingproducts = products.filter((product) =>{
    return product !== clicked 
    
  })
if (availableBalance > clicked.price){
  setProducts(remainingproducts)
  setShoppingCart([...shoppingCart, clicked])
  setAvailableBalance(availableBalance - clicked.price)

  
}else{
 {setWarningMsg('Insufficient funds. Your balance is too low to purchase this item')}
}}

const handleRemoveFromShoppingCart = (item) => {
  const updatedShoppingCart = shoppingCart.filter(
    (cartItem) => cartItem !== item
  )
  setShoppingCart(updatedShoppingCart);
  setProducts([...products, item]);
  setAvailableBalance(availableBalance + item.price)
  setWarningMsg("")
}

  return (
    <div>
      <h1>Zaids closet</h1>
      <h2>Your Balance: {availableBalance}</h2>
      
      
      {products.map((product)=>(
<div>
  <h2>{product.name}</h2>
  <h2>price: {product.price}</h2>
  <button onClick={()=> {handleAddToCart(product)}}>Add  {product.name} to shopping Cart</button>

</div>

      ))}
      <h1>Shopping cart</h1>
      <h1>availableBalance: {availableBalance} </h1>
      <p>{warningMsg}</p>
     {shoppingCart.map((item) =>(
      <div>
         
        <h2>{item.name}</h2>
        <h2>{item.price}</h2>
        <button onClick={()=> {handleRemoveFromShoppingCart(item)}}>remove  {item.name} to shopping Cart</button>

        </div>
    ))}
    </div>
  );
}

export default App


