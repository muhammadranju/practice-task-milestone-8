/* eslint-disable react-refresh/only-export-components */
import Dad from "../Dad/Dad";
import { createContext } from "react";

export const AssetContext = createContext("Gold");

const Grandpa = () => {
  return (
    <div>
      <h1>Grandpa</h1>
      <AssetContext.Provider value="Gold">
        <Dad />
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;
