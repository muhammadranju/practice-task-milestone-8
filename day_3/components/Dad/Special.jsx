import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <span>Special</span>
      <p>has: {gift}</p>
    </div>
  );
};

export default Special;
