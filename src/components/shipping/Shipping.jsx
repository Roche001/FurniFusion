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
            <span>4.Shipping Destinations:</span> We currently offer shipping to
            towns within Kenya. If your location is not listed, please contact
            our customer support for assistance.
          </li>
          <li>
            <span>5.Delivery Issues:</span> While we strive to deliver your
            order in a timely manner, please note that unforeseen circumstances
            such as weather, transportation delays, or other external factors
            may impact delivery times. We appreciate your understanding in such
            situations.
          </li>
        </ol>
      </div>
      <div className="returns">
        <h5>Returns and Exchanges:</h5>
        <ol>
          <li>
            <span>1.30-Day Return Policy:</span> We want you to be completely
            satisfied with your purchase. If you are not happy with your order,
            you can initiate a return within 30 days from the date of delivery.
            To be eligible for a return, items must be unused, in their original
            packaging, and in the same condition as received.
          </li>
          <li>
            <span>2.Return Process:</span>
            <ol className="a">
              <li>
                (a) Contact our customer support team to initiate a return
                request. Provide your order number and details about the items
                you wish to return.
              </li>
              <li>
                (b) Our team will provide you with a return authorization and
                instructions on how to proceed.
              </li>
              <li>
                (c) Pack the items securely in the original packaging, including
                all accessories and documentation. Clearly mark the return
                authorization on the package.
              </li>
              <li>
                Ship the package to the provided return address using a
                trackable shipping method. Return shipping costs are the
                responsibility of the customer.
              </li>
            </ol>
          </li>
          <li>
            <span>3.Refunds:</span> Once we receive and inspect the returned
            items, we will process your refund within [number of days] days.
            Refunds will be issued to the original payment method used for the
            purchase. Please note that shipping fees are non-refundable.
          </li>
          <li>
            <span>4.Exchanges:</span> If you received a damaged or defective
            item, please contact us within 7 days of receiving the order. We
            will arrange for a replacement to be shipped to you at no additional
            cost. In the case of an exchange, the damaged item must be returned
            to us following the same process as outlined in the return process.
          </li>
          <li>
            {" "}
            <span>5.Non-Returnable Items:</span> Customized or personalized
            items, as well as clearance or final sale items, are not eligible
            for return or exchange unless they are damaged or defective upon
            arrival.
          </li>
          <li>
            <span>6.Damaged or Defective Items:</span> If you receive a damaged
            or defective item, please contact us with photos of the item and its
            packaging within 7 days of receiving the order. We will work with
            you to resolve the issue promptly.
          </li>
        </ol>
      </div>
      <p>
        Please note that this policy is subject to change without prior notice.
        For the most up-to-date information, please refer to our website or
        contact our customer support team. We value your satisfaction and aim to
        provide the best possible shopping experience.
      </p>
    </div>
  );
};

export default Shipping;
