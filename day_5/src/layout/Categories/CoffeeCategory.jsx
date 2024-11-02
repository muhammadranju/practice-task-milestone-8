import { Link, useLoaderData, useParams } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const CoffeeCategory = () => {
  const { catId } = useParams();

  const coffees = useLoaderData();

  const findByCoffeeSlug = coffees.filter(
    (coffee) => coffee.category === catId
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
      {findByCoffeeSlug.map((coffee) => (
        <Link to={`/coffee/${coffee.id}`} key={coffee.id}>
          <CoffeeCard coffee={coffee} />
        </Link>
      ))}
    </div>
  );
};

export default CoffeeCategory;
