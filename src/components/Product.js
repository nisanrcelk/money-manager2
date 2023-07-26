function Product ({product,basket,setBasket,money,total}) {

    const basketItem=basket.find(item=> item.id===product.id)
    const addBasket = () =>{
        const checkBasket= basket.find(item => item.id === product.id )

        if (checkBasket){
            checkBasket.amount+=1
            setBasket([...basket.filter(item=>item.id !== product.id ),checkBasket])
        }
        else{
            setBasket([...basket,{
                id:product.id,
                amount:1
            }])
        }

    }
    const removeBasket = () =>{
      const checkBasket= basket.find(item => item.id === product.id )
      const basketWithoutCurrent=basket.filter(item=>item.id !== product.id)
      checkBasket.amount-=1

      if (checkBasket.amount===0){
        setBasket([...basketWithoutCurrent])
      }
      else{
        setBasket([...basketWithoutCurrent,checkBasket])
      }
    

  }
    return (
        <>
          <div className="product">
            <h6>{product.title}</h6>
            <div className="price">
            {product.price} t
            <div className="actions">
                <button disabled={!basketItem} onClick={removeBasket} >Sat</button>
                <span className="amount">{basketItem ? basketItem.amount : 0 } </span>
                <button disabled={total+ product.price>money} onClick={addBasket}>Satın Al</button>
            </div>
            </div>
            <style jsx>{`
              .product {
                background: #fff;
                padding:10px;
                border: 1px solid #ddd;
                margin-bottom:20px;
              }
            `}</style>
          </div>
        </>
      );
      
}

export default Product;