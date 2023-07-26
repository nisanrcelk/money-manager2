import BasketItem from "./BasketItem";

function Basket({basket,products,total}){

return (
    <>
    {basket.map(item=>(
        <BasketItem item={item} product={products.find(p => p.id===item.id)}></BasketItem>
    ))}
    <div>
        Toplam : {total}
    </div>
    </> 
)



}
export default Basket;