import React, { createContext, useContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./grandPa.css";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const GrandPa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Diamond";
  return (
    <div className="grandpa">
      <h2>GrandPa</h2>
      <h2>Net Money: {money}</h2>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="Diamond Jwl">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;
