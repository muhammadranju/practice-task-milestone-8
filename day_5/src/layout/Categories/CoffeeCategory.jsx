import { NavLink, useLoaderData, useParams } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import { useEffect, useState } from "react";

const CoffeeCategory = () => {
  const [isCoffee, setIsCoffee] = useState([]);
  const { catId } = useParams();
  const coffees = useLoaderData();

  useEffect(() => {
    if (catId) {
      const findByCoffeeSlug = [...coffees].filter(
        (coffee) => coffee.category === catId
      );
      setIsCoffee(findByCoffeeSlug);
    } else {
      setIsCoffee(coffees.slice(0, 6));
    }
  }, [catId, coffees]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
      {isCoffee.map((coffee) => (
        <NavLink to={`/coffee/${coffee.id}`} key={coffee.id}>
          <CoffeeCard coffee={coffee} />
        </NavLink>
      ))}
    </div>
  );
};

export default CoffeeCategory;
