import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal () {
    return (

         <div className="subtotal">
              {/* price */}
<CurrencyFormat/>




<button>PROceed to Checkout</button>
</div>


    );
}

export default Subtotal;