import { useLoaderData, useParams } from "react-router-dom";
import { setFavoriteItems } from "../../utils/localDB/localStorage";

const Coffee = () => {
  const { id } = useParams();
  const coffees = useLoaderData();
  const coffeeId = parseFloat(id);
  const findCoffeeById = coffees.find((coffee) => coffee.id === coffeeId);

  const handelFevItem = (id) => {
    setFavoriteItems(id);
  };

  return (
    <div>
      <img className="w-96" src={findCoffeeById.image} alt="" />
      Coffee{findCoffeeById.description} <br />
      <button onClick={() => handelFevItem(findCoffeeById.id)} className="btn ">
        Add Favorite List
      </button>
    </div>
  );
};

export default Coffee;
