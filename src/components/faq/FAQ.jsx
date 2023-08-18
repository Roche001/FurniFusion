import React from "react";
import "./FAQ.css";
import { faq } from "../../policy";

const FAQ = () => {
  return (
    <div className="faq-container">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p>
        Welcome to the Frequently Asked Questions (FAQs) section. We've compiled
        some common questions and answers to help you navigate your shopping
        experience. If you have any additional queries, feel free to contact our
        customer support.
      </p>
      {faq.map((item, index) => {
        return (
          <div key={index} className="faqs">
            <h6>{item.title}</h6>
            <p>{item.sub}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
