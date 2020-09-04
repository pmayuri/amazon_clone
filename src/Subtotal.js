import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal () {
    return (

         <div className="subtotal">
              {/* price */}
        <CurrencyFormat

        decimalScale={2}
        value={0}
        displayTypes={"text"}
        thousandSeparator={true}
        prefix={"INR"}
        />
            <button>Proceed to Checkout</button>
        </div>
);
}

export default Subtotal;