import { useLoaderData, useParams } from "react-router-dom";

const Coffee = () => {
  const { id } = useParams();
  const coffees = useLoaderData();
  const coffeeId = parseFloat(id);
  const findCoffeeById = coffees.find(
    (coffee) =>
      // console.log(coffee.id === coffeeId)
      coffee.id === coffeeId
  );
  console.log(findCoffeeById);
  // console.log(coffees);
  return (
    <div>
      <img src={findCoffeeById.image} alt="" />
      Coffee{findCoffeeById.description}{" "}
    </div>
  );
};

export default Coffee;
