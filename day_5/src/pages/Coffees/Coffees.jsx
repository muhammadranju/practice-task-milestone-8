import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const Coffees = () => {
  const coffees = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default Coffees;
