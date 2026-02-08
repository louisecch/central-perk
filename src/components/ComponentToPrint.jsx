import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const { cart, totalAmount } = props;
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  
  return (
    <div
      ref={ref}
      className="receipt-container"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px", fontFamily: "'Courier New', Courier, monospace" }}>
        <p style={{ margin: "5px 0", fontSize: "11px", fontFamily: "'Courier New', Courier, monospace" }}>123 Coffee Street</p>
        <p style={{ margin: "5px 0", fontSize: "11px", fontFamily: "'Courier New', Courier, monospace" }}>New York, NY 10001</p>
        <p style={{ margin: "5px 0", fontSize: "11px", fontFamily: "'Courier New', Courier, monospace" }}>Tel: (555) 123-4567</p>
        <div style={{ borderTop: "1px dashed #333", margin: "15px 0" }}></div>
        <p style={{ margin: "5px 0", fontSize: "11px", textAlign: "left", fontFamily: "'Courier New', Courier, monospace" }}>Date: {date}</p>
        <p style={{ margin: "5px 0", fontSize: "11px", textAlign: "left", fontFamily: "'Courier New', Courier, monospace" }}>Time: {time}</p>
        <div style={{ borderTop: "1px dashed #333", margin: "15px 0" }}></div>
      </div>
      
      <table className="receipt-table" style={{ width: "100%", fontFamily: "'Courier New', Courier, monospace" }}>
        <thead>
          <tr className="receipt-subheading">
            <td style={{ textAlign: "left", fontFamily: "'Courier New', Courier, monospace" }}>#</td>
            <td style={{ textAlign: "left", fontFamily: "'Courier New', Courier, monospace" }}>Item</td>
            <td style={{ textAlign: "right", fontFamily: "'Courier New', Courier, monospace" }}>Price</td>
            <td style={{ textAlign: "center", fontFamily: "'Courier New', Courier, monospace" }}>Qty</td>
            <td style={{ textAlign: "right", fontFamily: "'Courier New', Courier, monospace" }}>Total</td>
          </tr>
        </thead>
        <tbody>
          {cart
            ? cart.map((cartProduct, key) => (
                <tr key={key}>
                  <td style={{ textAlign: "left", fontFamily: "'Courier New', Courier, monospace" }}>{cartProduct.id}</td>
                  <td style={{ textAlign: "left", fontFamily: "'Courier New', Courier, monospace" }}>{cartProduct.name}</td>
                  <td style={{ textAlign: "right", fontFamily: "'Courier New', Courier, monospace" }}>${cartProduct.price}</td>
                  <td style={{ textAlign: "center", fontFamily: "'Courier New', Courier, monospace" }}>{cartProduct.quantity}</td>
                  <td style={{ textAlign: "right", fontFamily: "'Courier New', Courier, monospace" }}>${cartProduct.totalAmount}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
      
      <div style={{ borderTop: "1px dashed #333", margin: "20px 0" }}></div>
      
      <div style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: "12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontFamily: "'Courier New', Courier, monospace" }}>
          <span style={{ fontWeight: "bold", fontFamily: "'Courier New', Courier, monospace" }}>SUBTOTAL:</span>
          <span style={{ fontFamily: "'Courier New', Courier, monospace" }}>${totalAmount}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontFamily: "'Courier New', Courier, monospace" }}>
          <span style={{ fontWeight: "bold", fontFamily: "'Courier New', Courier, monospace" }}>TAX (0%):</span>
          <span style={{ fontFamily: "'Courier New', Courier, monospace" }}>$0.00</span>
        </div>
        <div style={{ borderTop: "2px solid #333", paddingTop: "10px", marginTop: "10px", fontFamily: "'Courier New', Courier, monospace" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontFamily: "'Courier New', Courier, monospace" }}>
            <span style={{ fontWeight: "bold", fontFamily: "'Courier New', Courier, monospace" }}>TOTAL:</span>
            <span style={{ fontWeight: "bold", fontFamily: "'Courier New', Courier, monospace" }}>${totalAmount}</span>
          </div>
        </div>
      </div>
      
      <div style={{ borderTop: "1px dashed #333", margin: "20px 0" }}></div>
      
      <div style={{ textAlign: "center", fontFamily: "'Courier New', Courier, monospace", fontSize: "11px", color: "black" }}>
        <p style={{ margin: "10px 0 5px 0", fontFamily: "'Courier New', Courier, monospace", color: "black" }}>Thank you! See you next time :)</p>
      </div>
    </div>
  );
});
