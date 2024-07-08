import React from "react";

const Form = () => {
  return (
    <form>
      <label>Date</label>
      <input type="text" name="date" className="input" placeholder="Date" />
      <label>Customer Name</label>
      <input
        type="text"
        name="customer-name"
        className="input"
        placeholder="Customer Name"
      />
      <label>Salesperson Name</label>
      <input
        type="text"
        name="salesperson-name"
        className="input"
        placeholder="Salesperson Name"
      />
      <label>Notes</label>
      <input type="text" name="notes" className="input" placeholder="Notes" />
    </form>
  );
};

export default Form;
