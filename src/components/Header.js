import { moneyFormat } from "../helpers";

function Header ({total,money}){


    return (
        <>
      <div className="header">
        {(money> 0 && total>0)? (<>Harcamak için<span> { moneyFormat(money-total)} </span> tl paranız var.</>)  : (<>Harcamak için<span>{moneyFormat(money)}</span>  tl paranız var.</>)   }
        {money-total===0 ? (<>Paran Bitti!</>) : ''}
      </div>
        
        </>
    )
}

export default Header;