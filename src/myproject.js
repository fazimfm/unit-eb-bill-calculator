import "./myproject.css";
handleKeypad = (value) => {
  if (value === "C") {
    this.setState({ unitInput: "", calculatedBill: null });
  } else {
    this.setState({ unitInput: this.state.unitInput + value });
  }
};



handleUnitCalculation = () => {
  const units = parseFloat(this.state.unitInput);
  if (isNaN(units) || units < 0) {
    this.setState({ calculatedBill: "Invalid Input" });
    return;
  }

  let amount = 0;


  if (units <= 100) amount = 0;
  else if (units <= 200) amount = (units - 100) * 2.25;
  else if (units <= 300) amount = 100 * 2.25 + (units - 200) * 4.5;
  else amount = 100 * 2.25 + 100 * 4.5 + (units - 300) * 6;

  this.setState({ calculatedBill: `₹${amount.toFixed(2)}` });
};
<div className="unit-back"></div>
  
        {/* unit calculator */}
        <div className="eb-bill-calculator">
  <h2 className="calc-heading"> UNIT EB Bill Calculator</h2>
  {/* <p className="calc-subtitle">(Simple Unit-Based Bill Estimation)</p> */}

  <div className="calc-display-box">
    <input type="text" value={this.state.unitInput} readOnly className="calc-display" />
  </div>

  <div className="keypad">
    {["1","2","3","4","5","6","7","8","9",".","0","C"].map((btn, index) => (
      <button key={index} onClick={() => this.handleKeypad(btn)} className="key-btn">
        {btn}
      </button>
    ))}
  </div>

  <button className="final-calc-btn" onClick={this.handleUnitCalculation}>
     Calculate Bill
  </button>

  {this.state.calculatedBill !== null && (
    // <p className="">
    //   🧾 Your EB Bill is: <strong>{this.state.calculatedBill}</strong>
    // </p>
    <div
    style={{
      marginTop: "5px",
      marginBottom: "-15px",
      color: "#fff",
      fontSize: "19px",
      textAlign: "center",
      fontWeight: "600",
      animation: "slideUp 0.6s ease-out",
      backgroundColor:"transparent"
    }}
  >
     Your EB Bill is: <span style={{ color: "#FFD700" }}>{this.state.calculatedBill}</span>
  </div>
  )}
</div>
