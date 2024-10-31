import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div>
      <h1>Dad</h1>
      <MySelf />
      <Brother />
      <Sister />
    </div>
  );
};

export default Dad;
