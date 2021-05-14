import React from "react";
import "../styles/Donate.css";

function Donate() {
  async function donate() {
    const wa: any = window;
    const ethereum = wa.ethereum;

    if (ethereum) {
      const transactionParameters = {
        gasPrice: "0x2540BE400",
        gas: "0xC350",
        to: "0xf2aA73346195f652b29b9d181beCd5919b78950b",
        from: ethereum.selectedAddress,
        value: "0xB1A2BC2EC50000",
      };

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
    }
  }

  return (
    <div className="donate-container">
      <button onClick={donate}>Donate</button>
    </div>
  );
}

export default Donate;
