import './App.css';
import Header from './components/Header';
import { useState,useEffect } from 'react';
import products from './products.json'
import Product from './components/Product'
import Basket from './components/Basket'


function App() {

  const [money,setMoney]=useState(200);
  const [basket,setBasket]=useState([]);
  const [total,setTotal]=useState(0);

  //baskette değişiklik olduğunda yapılacak işlem.
  useEffect(()=>{

    setTotal (
      basket.reduce((acc,item)=>{
        return acc+ (item.amount* (products.find(product => product.id ===item.id).price))
      },0)
    ) 
    console.log(basket)
  },[basket])

  const resetBasket = ()=>{
    setBasket([])
  }


  return (
    <>
   <Header total={total} money={money}></Header>
    {products.map(product=>(
      <Product money={money} total={total} key={product.id} basket={basket} setBasket={setBasket} product={product}></Product>
    ))}
          <Basket products={products} basket={basket} total={total}></Basket>
            <button onClick={resetBasket}>Sepeti sıfırla</button>

    </>
  );
}

export default App;
