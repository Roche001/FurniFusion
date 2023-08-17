import React from "react";
import "./Shipping.css";

const Shipping = () => {
  return (
    <div className="ship-container">
      <h3>Shipping & Return Policy</h3>
      <div className="shipping">
        <h5>Shipping Information:</h5>
        <ol>
          <li>
            <span> 1.Processing Time: </span>Orders are typically processed and
            shipped within 2-3 business days from the date of purchase. During
            peak seasons or holidays, processing times may be extended. We will
            notify you if there are any delays in processing your order.
          </li>
          <li>
            <span>2.Shipping Methods:</span> We offer standard shipping for all
            orders. Expedited shipping options may be available for an
            additional fee. Shipping times vary based on your location and the
            chosen shipping method. Once your order is shipped, you will receive
            a confirmation email with tracking information.
          </li>
          <li>
            <span>3.Shipping Rates:</span> Shipping rates are calculated based
            on the size and weight of your order, as well as your location. You
            can view the shipping costs at checkout before finalizing your
            purchase.
          </li>
          <li>
            <span>4.Shipping Destinations:</span> We currently offer shipping
            within [Homa-Bay, Kisumu, Kisii, ]. If your location is not listed,
            please contact our customer support for assistance.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Shipping;
